package operations

import (
"openapi/pkg/models/shared")

type RetrieveLicenseePathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    LicenseeKey string `pathParam:"style=simple,explode=false,name=licensee_key"`
    
}

type RetrieveLicenseeSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
    
}

type RetrieveLicenseeRequest struct {
    PathParams RetrieveLicenseePathParams 
    Security RetrieveLicenseeSecurity 
    
}

type RetrieveLicenseeResponse struct {
    AddressLookupResponseSchema *shared.AddressLookupResponseSchema 
    ContentType string 
    LicenseeResponseSchema *shared.LicenseeResponseSchema 
    StatusCode int64 
    
}

