package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Directions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDirections(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Directions {
	return &Directions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
func (s *Directions) GetDirectionsOutputFormat(ctx context.Context, request operations.GetDirectionsOutputFormatRequest) (*operations.GetDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/directions.{outputFormat}", request.PathParams)

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

	res := &operations.GetDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time
func (s *Directions) GetOptimalDirectionsOutputFormat(ctx context.Context, request operations.GetOptimalDirectionsOutputFormatRequest) (*operations.GetOptimalDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/optimalDirections.{outputFormat}", request.PathParams)

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

	res := &operations.GetOptimalDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetTruckDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle
func (s *Directions) GetTruckDirectionsOutputFormat(ctx context.Context, request operations.GetTruckDirectionsOutputFormatRequest) (*operations.GetTruckDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/directions.{outputFormat}", request.PathParams)

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

	res := &operations.GetTruckDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetTruckOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.
func (s *Directions) GetTruckOptimalDirectionsOutputFormat(ctx context.Context, request operations.GetTruckOptimalDirectionsOutputFormatRequest) (*operations.GetTruckOptimalDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/optimalDirections.{outputFormat}", request.PathParams)

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

	res := &operations.GetTruckOptimalDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
func (s *Directions) PostDirectionsOutputFormat(ctx context.Context, request operations.PostDirectionsOutputFormatRequest) (*operations.PostDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/directions.{outputFormat}", request.PathParams)

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

	res := &operations.PostDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
func (s *Directions) PostOptimalDirectionsOutputFormat(ctx context.Context, request operations.PostOptimalDirectionsOutputFormatRequest) (*operations.PostOptimalDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/optimalDirections.{outputFormat}", request.PathParams)

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

	res := &operations.PostOptimalDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostTruckDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
func (s *Directions) PostTruckDirectionsOutputFormat(ctx context.Context, request operations.PostTruckDirectionsOutputFormatRequest) (*operations.PostTruckDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/directions.{outputFormat}", request.PathParams)

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

	res := &operations.PostTruckDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostTruckOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
// Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
func (s *Directions) PostTruckOptimalDirectionsOutputFormat(ctx context.Context, request operations.PostTruckOptimalDirectionsOutputFormatRequest) (*operations.PostTruckOptimalDirectionsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/optimalDirections.{outputFormat}", request.PathParams)

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

	res := &operations.PostTruckOptimalDirectionsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
