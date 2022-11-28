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

type PlaceActionTypeMetadata struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPlaceActionTypeMetadata(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PlaceActionTypeMetadata {
	return &PlaceActionTypeMetadata{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// MybusinessplaceactionsPlaceActionTypeMetadataList - Returns the list of available place action types for a location or country.
func (s *PlaceActionTypeMetadata) MybusinessplaceactionsPlaceActionTypeMetadataList(ctx context.Context, request operations.MybusinessplaceactionsPlaceActionTypeMetadataListRequest) (*operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/placeActionTypeMetadata"

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

	res := &operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListPlaceActionTypeMetadataResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListPlaceActionTypeMetadataResponse = out
		}
	}

	return res, nil
}
