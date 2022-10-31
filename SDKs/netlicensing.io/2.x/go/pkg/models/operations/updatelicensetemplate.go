package operations

import (
"openapi/pkg/models/shared")

type UpdateLicenseTemplatePathParams struct {
    LicenseTemplateNumber string `pathParam:"style=simple,explode=false,name=licenseTemplateNumber"`
    
}

type UpdateLicenseTemplateRequestBody struct {
    Active *bool `form:"name=active"`
    Automatic *bool `form:"name=automatic"`
    Currency *string `form:"name=currency"`
    Hidden *bool `form:"name=hidden"`
    HideLicenses *bool `form:"name=hideLicenses"`
    LicenseType *string `form:"name=licenseType"`
    MaxSessions *string `form:"name=maxSessions"`
    Name *string `form:"name=name"`
    Number *string `form:"name=number"`
    Price *float64 `form:"name=price"`
    Quantity *string `form:"name=quantity"`
    Quota *string `form:"name=quota"`
    TimeVolume *string `form:"name=timeVolume"`
    TimeVolumePeriod *string `form:"name=timeVolumePeriod"`
    
}

type UpdateLicenseTemplateSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateLicenseTemplateRequest struct {
    PathParams UpdateLicenseTemplatePathParams 
    Request *UpdateLicenseTemplateRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateLicenseTemplateSecurity 
    
}

type UpdateLicenseTemplateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

