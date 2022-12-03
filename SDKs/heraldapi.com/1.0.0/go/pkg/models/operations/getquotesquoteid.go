package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuotesQuoteIDPathParams struct {
	QuoteID string `pathParam:"style=simple,explode=false,name=quote_id"`
}

type GetQuotesQuoteID200ApplicationJSON struct {
	Quote *shared.QuoteV1 `json:"quote,omitempty"`
}

type GetQuotesQuoteIDRequest struct {
	PathParams GetQuotesQuoteIDPathParams
}

type GetQuotesQuoteIDResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetQuotesQuoteID200ApplicationJSONObject *GetQuotesQuoteID200ApplicationJSON
}
