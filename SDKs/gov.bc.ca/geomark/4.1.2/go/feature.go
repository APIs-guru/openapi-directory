package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Feature struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFeature(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Feature {
	return &Feature{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetGeomarksGeomarkIDFeatureFileFormatExtension - Get the feature and attribution of the geomark
// The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
func (s *Feature) GetGeomarksGeomarkIDFeatureFileFormatExtension(ctx context.Context, request operations.GetGeomarksGeomarkIDFeatureFileFormatExtensionRequest) (*operations.GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/geomarks/{geomarkId}/feature.{fileFormatExtension}", request.PathParams)

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

	res := &operations.GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse{
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
