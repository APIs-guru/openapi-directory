package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Representatives struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRepresentatives(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Representatives {
	return &Representatives{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CivicinfoRepresentativesRepresentativeInfoByAddress - Looks up political geography and representative information for a single address.
func (s *Representatives) CivicinfoRepresentativesRepresentativeInfoByAddress(ctx context.Context, request operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest) (*operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/civicinfo/v2/representatives"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RepresentativeInfoResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepresentativeInfoResponse = out
		}
	}

	return res, nil
}

// CivicinfoRepresentativesRepresentativeInfoByDivision - Looks up representative information for a single geographic division.
func (s *Representatives) CivicinfoRepresentativesRepresentativeInfoByDivision(ctx context.Context, request operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest) (*operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/civicinfo/v2/representatives/{ocdId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RepresentativeInfoData
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepresentativeInfoData = out
		}
	}

	return res, nil
}
