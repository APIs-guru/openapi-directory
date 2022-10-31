package operations

import (
"openapi/pkg/models/shared")

type ReferencesCountriesByCountryCodeGetPathParams struct {
    CountryCode string `pathParam:"style=simple,explode=false,name=countryCode"`
    
}

type ReferencesCountriesByCountryCodeGetQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    
}

type ReferencesCountriesByCountryCodeGetHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type ReferencesCountriesByCountryCodeGetSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type ReferencesCountriesByCountryCodeGetRequest struct {
    PathParams ReferencesCountriesByCountryCodeGetPathParams 
    QueryParams ReferencesCountriesByCountryCodeGetQueryParams 
    Headers ReferencesCountriesByCountryCodeGetHeaders 
    Security ReferencesCountriesByCountryCodeGetSecurity 
    
}

type ReferencesCountriesByCountryCodeGetResponse struct {
    ContentType string 
    ReferencesCountriesByCountryCodeGet200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

