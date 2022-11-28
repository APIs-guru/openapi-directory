package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Point struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPoint(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Point {
	return &Point{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetGeomarksGeomarkIDPointFileFormatExtension - Gets a single spatial point representative of the geomark.
// The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
func (s *Point) GetGeomarksGeomarkIDPointFileFormatExtension(ctx context.Context, request operations.GetGeomarksGeomarkIDPointFileFormatExtensionRequest) (*operations.GetGeomarksGeomarkIDPointFileFormatExtensionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/geomarks/{geomarkId}/point.{fileFormatExtension}", request.PathParams)

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

	res := &operations.GetGeomarksGeomarkIDPointFileFormatExtensionResponse{
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
