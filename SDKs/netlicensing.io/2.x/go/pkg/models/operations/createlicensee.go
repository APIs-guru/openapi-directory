package operations

import (
"openapi/pkg/models/shared")

type CreateLicenseeRequestBody struct {
    Active bool `form:"name=active"`
    MarkedForTransfer *bool `form:"name=markedForTransfer"`
    Name *string `form:"name=name"`
    Number *string `form:"name=number"`
    ProductNumber string `form:"name=productNumber"`
    
}

type CreateLicenseeSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateLicenseeRequest struct {
    Request *CreateLicenseeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateLicenseeSecurity 
    
}

type CreateLicenseeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

