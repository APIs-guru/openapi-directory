package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Distance struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDistance(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Distance {
	return &Distance{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points
// Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
func (s *Distance) GetDistanceBetweenPairsOutputFormat(ctx context.Context, request operations.GetDistanceBetweenPairsOutputFormatRequest) (*operations.GetDistanceBetweenPairsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/distance/betweenPairs.{outputFormat}", request.PathParams)

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

	res := &operations.GetDistanceBetweenPairsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetDistanceOutputFormat - Get distance and travel time between two geographic points
// Represents the distance and time of the shortest or fastest path between given start and end points.
func (s *Distance) GetDistanceOutputFormat(ctx context.Context, request operations.GetDistanceOutputFormatRequest) (*operations.GetDistanceOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/distance.{outputFormat}", request.PathParams)

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

	res := &operations.GetDistanceOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetTruckDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points for a commercial vehicle
// Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
func (s *Distance) GetTruckDistanceBetweenPairsOutputFormat(ctx context.Context, request operations.GetTruckDistanceBetweenPairsOutputFormatRequest) (*operations.GetTruckDistanceBetweenPairsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/distance/betweenPairs.{outputFormat}", request.PathParams)

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

	res := &operations.GetTruckDistanceBetweenPairsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetTruckDistanceOutputFormat - Get distance and travel time between two geographic points for a commercial vehicle
// Represents the distance and time of the shortest or fastest path between given start and end points.
func (s *Distance) GetTruckDistanceOutputFormat(ctx context.Context, request operations.GetTruckDistanceOutputFormatRequest) (*operations.GetTruckDistanceOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/distance.{outputFormat}", request.PathParams)

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

	res := &operations.GetTruckDistanceOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points
// Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
func (s *Distance) PostDistanceBetweenPairsOutputFormat(ctx context.Context, request operations.PostDistanceBetweenPairsOutputFormatRequest) (*operations.PostDistanceBetweenPairsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/distance/betweenPairs.{outputFormat}", request.PathParams)

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

	res := &operations.PostDistanceBetweenPairsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostDistanceOutputFormat - Get distance and travel time between two geographic points
// Represents the distance and time of the shortest or fastest path between given start and end points.
func (s *Distance) PostDistanceOutputFormat(ctx context.Context, request operations.PostDistanceOutputFormatRequest) (*operations.PostDistanceOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/distance.{outputFormat}", request.PathParams)

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

	res := &operations.PostDistanceOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostTruckDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points
// Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
func (s *Distance) PostTruckDistanceBetweenPairsOutputFormat(ctx context.Context, request operations.PostTruckDistanceBetweenPairsOutputFormatRequest) (*operations.PostTruckDistanceBetweenPairsOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/distance/betweenPairs.{outputFormat}", request.PathParams)

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

	res := &operations.PostTruckDistanceBetweenPairsOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostTruckDistanceOutputFormat - Get distance and travel time between two geographic points
// Represents the distance and time of the shortest or fastest path between given start and end points.
func (s *Distance) PostTruckDistanceOutputFormat(ctx context.Context, request operations.PostTruckDistanceOutputFormatRequest) (*operations.PostTruckDistanceOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/truck/distance.{outputFormat}", request.PathParams)

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

	res := &operations.PostTruckDistanceOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
