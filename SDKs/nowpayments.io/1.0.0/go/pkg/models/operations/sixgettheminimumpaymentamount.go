package operations

type SixGetTheMinimumPaymentAmountQueryParams struct {
	CurrencyFrom *string `queryParam:"style=form,explode=true,name=currency_from"`
	CurrencyTo   *string `queryParam:"style=form,explode=true,name=currency_to"`
}

type SixGetTheMinimumPaymentAmountRequest struct {
	QueryParams SixGetTheMinimumPaymentAmountQueryParams
}

type SixGetTheMinimumPaymentAmount200ApplicationJSON struct {
	CurrencyFrom *string  `json:"currency_from,omitempty"`
	CurrencyTo   *string  `json:"currency_to,omitempty"`
	MinAmount    *float64 `json:"min_amount,omitempty"`
}

type SixGetTheMinimumPaymentAmountResponse struct {
	SixGetTheMinimumPaymentAmount200ApplicationJSONObject *SixGetTheMinimumPaymentAmount200ApplicationJSON
	ContentType                                           string
	Headers                                               map[string][]string
	StatusCode                                            int64
}
