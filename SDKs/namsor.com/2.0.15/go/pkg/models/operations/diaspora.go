package operations

import (
"openapi/pkg/models/shared")

type DiasporaPathParams struct {
    CountryIso2 string `pathParam:"style=simple,explode=false,name=countryIso2"`
    FirstName string `pathParam:"style=simple,explode=false,name=firstName"`
    LastName string `pathParam:"style=simple,explode=false,name=lastName"`
    
}

type DiasporaSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DiasporaRequest struct {
    PathParams DiasporaPathParams 
    Security DiasporaSecurity 
    
}

type DiasporaResponse struct {
    ContentType string 
    FirstLastNameDiasporaedOut *shared.FirstLastNameDiasporaedOut 
    StatusCode int64 
    
}

