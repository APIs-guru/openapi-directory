package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Quotes struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewQuotes(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Quotes {
	return &Quotes{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetQuotesQuoteID - /quotes/{quote_id}
// ### Get a quote
//
// Get the latest details for a specific [quote](https://www.heraldapi.com/docs/quotes) created by a `submission`. While a submission can contain many products, each quote is for a *single* product. A `quote_id` is created for each quote, located in the submission response.
//
// > If you're looking to create a new quote with a carrier, you need to [create a submission](../reference/HeraldAPI.v1.yaml/paths/~1submissions/post) before retrieving quote details.
func (s *Quotes) GetQuotesQuoteID(ctx context.Context, request operations.GetQuotesQuoteIDRequest) (*operations.GetQuotesQuoteIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/quotes/{quote_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetQuotesQuoteIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetQuotesQuoteID200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetQuotesQuoteID200ApplicationJSONObject = out
		}
	}

	return res, nil
}
