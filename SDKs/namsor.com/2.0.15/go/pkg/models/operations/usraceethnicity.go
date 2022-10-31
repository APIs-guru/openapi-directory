package operations

import (
"openapi/pkg/models/shared")

type UsRaceEthnicityPathParams struct {
    FirstName string `pathParam:"style=simple,explode=false,name=firstName"`
    LastName string `pathParam:"style=simple,explode=false,name=lastName"`
    
}

type UsRaceEthnicitySecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsRaceEthnicityRequest struct {
    PathParams UsRaceEthnicityPathParams 
    Security UsRaceEthnicitySecurity 
    
}

type UsRaceEthnicityResponse struct {
    ContentType string 
    FirstLastNameUsRaceEthnicityOut *shared.FirstLastNameUsRaceEthnicityOut 
    StatusCode int64 
    
}

