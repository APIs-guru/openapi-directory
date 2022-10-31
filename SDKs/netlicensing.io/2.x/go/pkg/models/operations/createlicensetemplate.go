package operations

import (
"openapi/pkg/models/shared")

type CreateLicenseTemplateRequestBody struct {
    Active bool `form:"name=active"`
    Automatic *bool `form:"name=automatic"`
    Currency *string `form:"name=currency"`
    Hidden *bool `form:"name=hidden"`
    HideLicenses *bool `form:"name=hideLicenses"`
    LicenseType string `form:"name=licenseType"`
    MaxSessions *string `form:"name=maxSessions"`
    Name string `form:"name=name"`
    Number *string `form:"name=number"`
    Price *float64 `form:"name=price"`
    ProductModuleNumber string `form:"name=productModuleNumber"`
    Quantity *string `form:"name=quantity"`
    Quota *string `form:"name=quota"`
    TimeVolume *string `form:"name=timeVolume"`
    TimeVolumePeriod *string `form:"name=timeVolumePeriod"`
    
}

type CreateLicenseTemplateSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateLicenseTemplateRequest struct {
    Request CreateLicenseTemplateRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateLicenseTemplateSecurity 
    
}

type CreateLicenseTemplateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

