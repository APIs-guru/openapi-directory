package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Parts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewParts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Parts {
	return &Parts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetGeomarksGeomarkIDPartsFileFormatExtension - Get the individual geometries within a multi-part geometry
// The geomark parts resource returns a one or more spatial features. One for each part of the Geomark's geomerty. Each part contains a single (Point, LineString, Polygon) geometry and the geomark attribution.
func (s *Parts) GetGeomarksGeomarkIDPartsFileFormatExtension(ctx context.Context, request operations.GetGeomarksGeomarkIDPartsFileFormatExtensionRequest) (*operations.GetGeomarksGeomarkIDPartsFileFormatExtensionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/geomarks/{geomarkId}/parts.{fileFormatExtension}", request.PathParams)

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

	res := &operations.GetGeomarksGeomarkIDPartsFileFormatExtensionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
