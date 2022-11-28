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

type ThreatLists struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewThreatLists(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ThreatLists {
	return &ThreatLists{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// WebriskThreatListsComputeDiff - Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.
func (s *ThreatLists) WebriskThreatListsComputeDiff(ctx context.Context, request operations.WebriskThreatListsComputeDiffRequest) (*operations.WebriskThreatListsComputeDiffResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/threatLists:computeDiff"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WebriskThreatListsComputeDiffResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudWebriskV1ComputeThreatListDiffResponse = out
		}
	}

	return res, nil
}
