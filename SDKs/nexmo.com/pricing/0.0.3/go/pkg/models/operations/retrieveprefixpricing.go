package operations



type RetrievePrefixPricingPathParams struct {
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type RetrievePrefixPricingQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
    Prefix string `queryParam:"style=form,explode=true,name=prefix"`
    
}

type RetrievePrefixPricingRequest struct {
    PathParams RetrievePrefixPricingPathParams 
    QueryParams RetrievePrefixPricingQueryParams 
    
}

type RetrievePrefixPricing400ApplicationJSONInvalidParameters struct {
    Message *string `json:"message,omitempty"`
    Parameter *string `json:"parameter,omitempty"`
    
}

type RetrievePrefixPricing400ApplicationJSON struct {
    ErrorTitle string `json:"error_title"`
    InvalidParameters RetrievePrefixPricing400ApplicationJSONInvalidParameters `json:"invalid_parameters"`
    Type string `json:"type"`
    
}

type RetrievePrefixPricing401ApplicationJSON struct {
    Code string `json:"code"`
    Currency string `json:"currency"`
    ErrorCodeLabel string `json:"error-code-label"`
    
}

type RetrievePrefixPricingResponse struct {
    ContentType string 
    PricingCountriesResponse *interface{} 
    StatusCode int64 
    RetrievePrefixPricing400ApplicationJSONObject *RetrievePrefixPricing400ApplicationJSON 
    RetrievePrefixPricing401ApplicationJSONObject *RetrievePrefixPricing401ApplicationJSON 
    
}

