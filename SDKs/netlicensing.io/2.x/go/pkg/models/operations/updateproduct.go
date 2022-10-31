package operations

import (
"openapi/pkg/models/shared")

type UpdateProductPathParams struct {
    ProductNumber string `pathParam:"style=simple,explode=false,name=productNumber"`
    
}


type UpdateProductRequestBodyVatModeEnum string

const (
    UpdateProductRequestBodyVatModeEnumGross UpdateProductRequestBodyVatModeEnum = "GROSS"
UpdateProductRequestBodyVatModeEnumNet UpdateProductRequestBodyVatModeEnum = "NET"
)


type UpdateProductRequestBody struct {
    Active *bool `form:"name=active"`
    Description *string `form:"name=description"`
    LicenseeAutoCreate *bool `form:"name=licenseeAutoCreate"`
    LicensingInfo *string `form:"name=licensingInfo"`
    Name *string `form:"name=name"`
    Number *string `form:"name=number"`
    VatMode *UpdateProductRequestBodyVatModeEnum `form:"name=vatMode"`
    Version *string `form:"name=version"`
    
}

type UpdateProductSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateProductRequest struct {
    PathParams UpdateProductPathParams 
    Request *UpdateProductRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateProductSecurity 
    
}

type UpdateProductResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

