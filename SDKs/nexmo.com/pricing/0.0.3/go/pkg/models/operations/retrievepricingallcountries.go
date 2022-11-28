package operations

type RetrievePricingAllCountriesPathParams struct {
	Type string `pathParam:"style=simple,explode=false,name=type"`
}

type RetrievePricingAllCountriesQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
}

type RetrievePricingAllCountries400ApplicationJSONInvalidParameters struct {
	Message   *string `json:"message,omitempty"`
	Parameter *string `json:"parameter,omitempty"`
}

type RetrievePricingAllCountries400ApplicationJSON struct {
	ErrorTitle        string                                                         `json:"error_title"`
	InvalidParameters RetrievePricingAllCountries400ApplicationJSONInvalidParameters `json:"invalid_parameters"`
	Type              string                                                         `json:"type"`
}

type RetrievePricingAllCountries401ApplicationJSON struct {
	Code           string `json:"code"`
	Currency       string `json:"currency"`
	ErrorCodeLabel string `json:"error-code-label"`
}

type RetrievePricingAllCountriesRequest struct {
	PathParams  RetrievePricingAllCountriesPathParams
	QueryParams RetrievePricingAllCountriesQueryParams
}

type RetrievePricingAllCountriesResponse struct {
	ContentType                                         string
	PricingCountriesResponse                            *interface{}
	StatusCode                                          int64
	RetrievePricingAllCountries400ApplicationJSONObject *RetrievePricingAllCountries400ApplicationJSON
	RetrievePricingAllCountries401ApplicationJSONObject *RetrievePricingAllCountries401ApplicationJSON
}
