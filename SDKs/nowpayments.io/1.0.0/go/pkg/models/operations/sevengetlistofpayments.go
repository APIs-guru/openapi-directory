package operations



type SevenGetListOfPaymentsQueryParams struct {
    DateFrom *string `queryParam:"style=form,explode=true,name=dateFrom"`
    DateTo *string `queryParam:"style=form,explode=true,name=dateTo"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    
}

type SevenGetListOfPaymentsRequest struct {
    QueryParams SevenGetListOfPaymentsQueryParams 
    
}

type SevenGetListOfPayments200ApplicationJSONData struct {
    ActuallyPaid *float64 `json:"actually_paid,omitempty"`
    OrderDescription *string `json:"order_description,omitempty"`
    OrderID *string `json:"order_id,omitempty"`
    OutcomeAmount *float64 `json:"outcome_amount,omitempty"`
    OutcomeCurrency *string `json:"outcome_currency,omitempty"`
    PayAddress *string `json:"pay_address,omitempty"`
    PayAmount *float64 `json:"pay_amount,omitempty"`
    PayCurrency *string `json:"pay_currency,omitempty"`
    PaymentID *float64 `json:"payment_id,omitempty"`
    PaymentStatus *string `json:"payment_status,omitempty"`
    PriceAmount *float64 `json:"price_amount,omitempty"`
    PriceCurrency *string `json:"price_currency,omitempty"`
    PurchaseID *string `json:"purchase_id,omitempty"`
    
}

type SevenGetListOfPayments200ApplicationJSON struct {
    Data []SevenGetListOfPayments200ApplicationJSONData `json:"data,omitempty"`
    Limit *float64 `json:"limit,omitempty"`
    Page *float64 `json:"page,omitempty"`
    PagesCount *float64 `json:"pagesCount,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type SevenGetListOfPaymentsResponse struct {
    SevenGetListOfPayments200ApplicationJSONObject *SevenGetListOfPayments200ApplicationJSON 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

