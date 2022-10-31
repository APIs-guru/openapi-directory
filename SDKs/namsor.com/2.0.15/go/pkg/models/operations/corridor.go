package operations

import (
"openapi/pkg/models/shared")

type CorridorPathParams struct {
    CountryIso2From string `pathParam:"style=simple,explode=false,name=countryIso2From"`
    CountryIso2To string `pathParam:"style=simple,explode=false,name=countryIso2To"`
    FirstNameFrom string `pathParam:"style=simple,explode=false,name=firstNameFrom"`
    FirstNameTo string `pathParam:"style=simple,explode=false,name=firstNameTo"`
    LastNameFrom string `pathParam:"style=simple,explode=false,name=lastNameFrom"`
    LastNameTo string `pathParam:"style=simple,explode=false,name=lastNameTo"`
    
}

type CorridorSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CorridorRequest struct {
    PathParams CorridorPathParams 
    Security CorridorSecurity 
    
}

type CorridorResponse struct {
    ContentType string 
    CorridorOut *shared.CorridorOut 
    StatusCode int64 
    
}

