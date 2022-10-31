package operations

import (
"openapi/pkg/models/shared")

type UpdateLicenseePathParams struct {
    LicenseeNumber string `pathParam:"style=simple,explode=false,name=licenseeNumber"`
    
}

type UpdateLicenseeRequestBody struct {
    Active *bool `form:"name=active"`
    MarkedForTransfer *bool `form:"name=markedForTransfer"`
    Name *string `form:"name=name"`
    Number *string `form:"name=number"`
    
}

type UpdateLicenseeSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateLicenseeRequest struct {
    PathParams UpdateLicenseePathParams 
    Request *UpdateLicenseeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateLicenseeSecurity 
    
}

type UpdateLicenseeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

