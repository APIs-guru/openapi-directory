package operations

type SevenGetListOfPaymentsQueryParams struct {
	DateFrom *string `queryParam:"style=form,explode=true,name=dateFrom"`
	DateTo   *string `queryParam:"style=form,explode=true,name=dateTo"`
	Limit    *string `queryParam:"style=form,explode=true,name=limit"`
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     *string `queryParam:"style=form,explode=true,name=page"`
	SortBy   *string `queryParam:"style=form,explode=true,name=sortBy"`
}

type SevenGetListOfPaymentsRequest struct {
	QueryParams SevenGetListOfPaymentsQueryParams
}

type SevenGetListOfPayments200ApplicationJSONData struct {
	ActuallyPaid     *float64 `json:"actually_paid"`
	OrderDescription *string  `json:"order_description"`
	OrderID          *string  `json:"order_id"`
	OutcomeAmount    *float64 `json:"outcome_amount"`
	OutcomeCurrency  *string  `json:"outcome_currency"`
	PayAddress       *string  `json:"pay_address"`
	PayAmount        *float64 `json:"pay_amount"`
	PayCurrency      *string  `json:"pay_currency"`
	PaymentID        *float64 `json:"payment_id"`
	PaymentStatus    *string  `json:"payment_status"`
	PriceAmount      *float64 `json:"price_amount"`
	PriceCurrency    *string  `json:"price_currency"`
	PurchaseID       *string  `json:"purchase_id"`
}

type SevenGetListOfPayments200ApplicationJSON struct {
	Data       []SevenGetListOfPayments200ApplicationJSONData `json:"data"`
	Limit      *float64                                       `json:"limit"`
	Page       *float64                                       `json:"page"`
	PagesCount *float64                                       `json:"pagesCount"`
	Total      *float64                                       `json:"total"`
}

type SevenGetListOfPaymentsResponse struct {
	SevenGetListOfPayments200ApplicationJSONObject *SevenGetListOfPayments200ApplicationJSON
	ContentType                                    string
	Headers                                        map[string][]string
	StatusCode                                     int64
}
