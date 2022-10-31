package operations

import (
"openapi/pkg/models/shared")

type CreateLicenseePathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    
}

type CreateLicenseeSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
    
}

type CreateLicenseeRequest struct {
    PathParams CreateLicenseePathParams 
    Request shared.CreateLicenseeSchema `request:"mediaType=application/json"`
    Security CreateLicenseeSecurity 
    
}

type CreateLicenseeResponse struct {
    AddressLookupResponseSchema *shared.AddressLookupResponseSchema 
    ContentType string 
    LicenseeResponseSchema *shared.LicenseeResponseSchema 
    StatusCode int64 
    
}

