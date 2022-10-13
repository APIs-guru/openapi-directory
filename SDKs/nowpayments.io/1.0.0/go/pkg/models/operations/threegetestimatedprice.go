package operations

type ThreeGetEstimatedPriceQueryParams struct {
	Amount       *string `queryParam:"style=form,explode=true,name=amount"`
	CurrencyFrom *string `queryParam:"style=form,explode=true,name=currency_from"`
	CurrencyTo   *string `queryParam:"style=form,explode=true,name=currency_to"`
}

type ThreeGetEstimatedPriceRequest struct {
	QueryParams ThreeGetEstimatedPriceQueryParams
}

type ThreeGetEstimatedPrice200ApplicationJSON struct {
	AmountFrom      *float64 `json:"amount_from"`
	CurrencyFrom    *string  `json:"currency_from"`
	CurrencyTo      *string  `json:"currency_to"`
	EstimatedAmount *float64 `json:"estimated_amount"`
}

type ThreeGetEstimatedPriceResponse struct {
	ThreeGetEstimatedPrice200ApplicationJSONObject *ThreeGetEstimatedPrice200ApplicationJSON
	ContentType                                    string
	Headers                                        map[string][]string
	StatusCode                                     int64
}
