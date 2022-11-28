package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Prime struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPrime(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Prime {
	return &Prime{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNumbersPrimeFactors - Get the prime factors of a given number.
func (s *Prime) GetNumbersPrimeFactors(ctx context.Context, request operations.GetNumbersPrimeFactorsRequest) (*operations.GetNumbersPrimeFactorsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/factors"

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

	res := &operations.GetNumbersPrimeFactorsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetNumbersPrimeIsFermatPrime - Checks whether a given number is a known fermat prime number or not.
func (s *Prime) GetNumbersPrimeIsFermatPrime(ctx context.Context, request operations.GetNumbersPrimeIsFermatPrimeRequest) (*operations.GetNumbersPrimeIsFermatPrimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/is-fermat-prime"

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

	res := &operations.GetNumbersPrimeIsFermatPrimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetNumbersPrimeIsFibonacciPrime - Checks whether a given number is a known fibonacci prime number or not.
func (s *Prime) GetNumbersPrimeIsFibonacciPrime(ctx context.Context, request operations.GetNumbersPrimeIsFibonacciPrimeRequest) (*operations.GetNumbersPrimeIsFibonacciPrimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/is-fibonacci-prime"

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

	res := &operations.GetNumbersPrimeIsFibonacciPrimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetNumbersPrimeIsMersennePrime - Checks whether a given number is a known mersenne prime number or not.
func (s *Prime) GetNumbersPrimeIsMersennePrime(ctx context.Context, request operations.GetNumbersPrimeIsMersennePrimeRequest) (*operations.GetNumbersPrimeIsMersennePrimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/is-mersenne-prime"

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

	res := &operations.GetNumbersPrimeIsMersennePrimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetNumbersPrimeIsPartitionPrime - Checks whether a given number is a known partition prime number or not.
func (s *Prime) GetNumbersPrimeIsPartitionPrime(ctx context.Context, request operations.GetNumbersPrimeIsPartitionPrimeRequest) (*operations.GetNumbersPrimeIsPartitionPrimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/is-partition-prime"

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

	res := &operations.GetNumbersPrimeIsPartitionPrimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetNumbersPrimeIsPellPrime - Checks whether a given number is a known pell prime number or not.
func (s *Prime) GetNumbersPrimeIsPellPrime(ctx context.Context, request operations.GetNumbersPrimeIsPellPrimeRequest) (*operations.GetNumbersPrimeIsPellPrimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/is-pell-prime"

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

	res := &operations.GetNumbersPrimeIsPellPrimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetNumbersPrimeIsPerfect - Checks whether a given number is a perfect number or not.
func (s *Prime) GetNumbersPrimeIsPerfect(ctx context.Context, request operations.GetNumbersPrimeIsPerfectRequest) (*operations.GetNumbersPrimeIsPerfectResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/is-perfect"

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

	res := &operations.GetNumbersPrimeIsPerfectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetNumbersPrimeIsPrime - Checks whether a given number is a known prime number or not.
func (s *Prime) GetNumbersPrimeIsPrime(ctx context.Context, request operations.GetNumbersPrimeIsPrimeRequest) (*operations.GetNumbersPrimeIsPrimeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/numbers/prime/is-prime"

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

	res := &operations.GetNumbersPrimeIsPrimeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}
