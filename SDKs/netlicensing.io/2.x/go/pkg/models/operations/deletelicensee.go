package operations

import (
"openapi/pkg/models/shared")

type DeleteLicenseePathParams struct {
    LicenseeNumber string `pathParam:"style=simple,explode=false,name=licenseeNumber"`
    
}

type DeleteLicenseeQueryParams struct {
    ForceCascade *bool `queryParam:"style=form,explode=true,name=forceCascade"`
    
}

type DeleteLicenseeSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteLicenseeRequest struct {
    PathParams DeleteLicenseePathParams 
    QueryParams DeleteLicenseeQueryParams 
    Security DeleteLicenseeSecurity 
    
}

type DeleteLicenseeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

