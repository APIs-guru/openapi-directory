package operations

type RetrievePricingCountryPathParams struct {
	Type string `pathParam:"style=simple,explode=false,name=type"`
}

type RetrievePricingCountryQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
	Country   string `queryParam:"style=form,explode=true,name=country"`
}

type RetrievePricingCountryRequest struct {
	PathParams  RetrievePricingCountryPathParams
	QueryParams RetrievePricingCountryQueryParams
}

type RetrievePricingCountry400ApplicationJSONInvalidParameters struct {
	Message   *string `json:"message,omitempty"`
	Parameter *string `json:"parameter,omitempty"`
}

type RetrievePricingCountry400ApplicationJSON struct {
	ErrorTitle        string                                                    `json:"error_title"`
	InvalidParameters RetrievePricingCountry400ApplicationJSONInvalidParameters `json:"invalid_parameters"`
	Type              string                                                    `json:"type"`
}

type RetrievePricingCountry401ApplicationJSON struct {
	Code           string `json:"code"`
	Currency       string `json:"currency"`
	ErrorCodeLabel string `json:"error-code-label"`
}

type RetrievePricingCountryResponse struct {
	ContentType                                    string
	PricingCountryResponse                         *interface{}
	StatusCode                                     int64
	RetrievePricingCountry400ApplicationJSONObject *RetrievePricingCountry400ApplicationJSON
	RetrievePricingCountry401ApplicationJSONObject *RetrievePricingCountry401ApplicationJSON
}
