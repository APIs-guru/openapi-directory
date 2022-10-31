package operations

import (
"openapi/pkg/models/shared")

type TransferLicensesPathParams struct {
    LicenseeNumber string `pathParam:"style=simple,explode=false,name=licenseeNumber"`
    
}

type TransferLicensesRequestBody struct {
    SourceLicenseeNumber string `form:"name=sourceLicenseeNumber"`
    
}

type TransferLicensesSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type TransferLicensesRequest struct {
    PathParams TransferLicensesPathParams 
    Request TransferLicensesRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security TransferLicensesSecurity 
    
}

type TransferLicensesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

