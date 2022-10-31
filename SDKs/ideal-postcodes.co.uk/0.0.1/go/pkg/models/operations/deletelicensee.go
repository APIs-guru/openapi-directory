package operations

import (
"openapi/pkg/models/shared")

type DeleteLicenseePathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    LicenseeKey string `pathParam:"style=simple,explode=false,name=licensee_key"`
    
}

type DeleteLicenseeSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteLicenseeRequest struct {
    PathParams DeleteLicenseePathParams 
    Security DeleteLicenseeSecurity 
    
}

type DeleteLicenseeResponse struct {
    AddressLookupResponseSchema *shared.AddressLookupResponseSchema 
    ContentType string 
    DeleteLicenseeResponseSchema *shared.DeleteLicenseeResponseSchema 
    StatusCode int64 
    
}

