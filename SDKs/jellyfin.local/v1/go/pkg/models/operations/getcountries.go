package operations

import (
"openapi/pkg/models/shared")

type GetCountriesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetCountriesRequest struct {
    Security GetCountriesSecurity 
    
}

type GetCountriesResponse struct {
    ContentType string 
    CountryInfos []shared.CountryInfo 
    StatusCode int64 
    
}

