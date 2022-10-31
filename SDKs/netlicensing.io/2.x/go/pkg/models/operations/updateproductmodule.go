package operations

import (
"openapi/pkg/models/shared")

type UpdateProductModulePathParams struct {
    ProductModuleNumber string `pathParam:"style=simple,explode=false,name=productModuleNumber"`
    
}


type UpdateProductModuleRequestBodyLicenseTemplateEnum string

const (
    UpdateProductModuleRequestBodyLicenseTemplateEnumTimevolume UpdateProductModuleRequestBodyLicenseTemplateEnum = "TIMEVOLUME"
UpdateProductModuleRequestBodyLicenseTemplateEnumFeature UpdateProductModuleRequestBodyLicenseTemplateEnum = "FEATURE"
)



type UpdateProductModuleRequestBodyNodeSecretModeEnum string

const (
    UpdateProductModuleRequestBodyNodeSecretModeEnumPredefined UpdateProductModuleRequestBodyNodeSecretModeEnum = "PREDEFINED"
UpdateProductModuleRequestBodyNodeSecretModeEnumClient UpdateProductModuleRequestBodyNodeSecretModeEnum = "CLIENT"
)


type UpdateProductModuleRequestBody struct {
    Active *bool `form:"name=active"`
    LicenseTemplate []UpdateProductModuleRequestBodyLicenseTemplateEnum `form:"name=licenseTemplate"`
    LicensingModel *string `form:"name=licensingModel"`
    MaxCheckoutValidity *int32 `form:"name=maxCheckoutValidity"`
    Name *string `form:"name=name"`
    NodeSecretMode []UpdateProductModuleRequestBodyNodeSecretModeEnum `form:"name=nodeSecretMode"`
    Number *string `form:"name=number"`
    RedThreshold *int32 `form:"name=redThreshold"`
    YellowThreshold *int32 `form:"name=yellowThreshold"`
    
}

type UpdateProductModuleSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateProductModuleRequest struct {
    PathParams UpdateProductModulePathParams 
    Request *UpdateProductModuleRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateProductModuleSecurity 
    
}

type UpdateProductModuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

