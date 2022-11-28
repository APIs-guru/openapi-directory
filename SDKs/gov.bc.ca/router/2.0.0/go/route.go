package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Route struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRoute(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Route {
	return &Route{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetOptimalRouteOutputFormat - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
// Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time
func (s *Route) GetOptimalRouteOutputFormat(ctx context.Context, request operations.GetOptimalRouteOutputFormatRequest) (*operations.GetOptimalRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/optimalRoute.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOptimalRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
// Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
func (s *Route) GetRouteOutputFormat(ctx context.Context, request operations.GetRouteOutputFormatRequest) (*operations.GetRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/route.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetTruckOptimalRouteOutputFormat - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
// Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.
func (s *Route) GetTruckOptimalRouteOutputFormat(ctx context.Context, request operations.GetTruckOptimalRouteOutputFormatRequest) (*operations.GetTruckOptimalRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/optimalRoute.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTruckOptimalRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetTruckRouteOutputFormat - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
// Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.
func (s *Route) GetTruckRouteOutputFormat(ctx context.Context, request operations.GetTruckRouteOutputFormatRequest) (*operations.GetTruckRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/route.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTruckRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostOptimalRouteOutputFormat - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
// Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
func (s *Route) PostOptimalRouteOutputFormat(ctx context.Context, request operations.PostOptimalRouteOutputFormatRequest) (*operations.PostOptimalRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/optimalRoute.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostOptimalRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
// Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
func (s *Route) PostRouteOutputFormat(ctx context.Context, request operations.PostRouteOutputFormatRequest) (*operations.PostRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/route.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostTruckOptimalRouteOutputFormat - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
// Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
func (s *Route) PostTruckOptimalRouteOutputFormat(ctx context.Context, request operations.PostTruckOptimalRouteOutputFormatRequest) (*operations.PostTruckOptimalRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/optimalRoute.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostTruckOptimalRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostTruckRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
// Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
func (s *Route) PostTruckRouteOutputFormat(ctx context.Context, request operations.PostTruckRouteOutputFormatRequest) (*operations.PostTruckRouteOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/route.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostTruckRouteOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
