package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Classifier struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewClassifier(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Classifier {
	return &Classifier{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetABatchOfBusinessTransactionClassificationResults - Get a batch of business transaction classification results.
// Get a batch of business transaction classification results.
func (s *Classifier) GetABatchOfBusinessTransactionClassificationResults(ctx context.Context, request operations.GetABatchOfBusinessTransactionClassificationResultsRequest) (*operations.GetABatchOfBusinessTransactionClassificationResultsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/classifier/business/batch/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetABatchOfBusinessTransactionClassificationResultsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetABatchOfConsumerTransactionClassificationResults - Get a batch of consumer transaction classification results.
// Get a batch of consumer transaction classification results.
func (s *Classifier) GetABatchOfConsumerTransactionClassificationResults(ctx context.Context, request operations.GetABatchOfConsumerTransactionClassificationResultsRequest) (*operations.GetABatchOfConsumerTransactionClassificationResultsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/classifier/consumer/batch/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetABatchOfConsumerTransactionClassificationResultsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
