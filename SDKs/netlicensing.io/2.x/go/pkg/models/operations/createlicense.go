package operations

import (
"time"
"openapi/pkg/models/shared")

type CreateLicenseRequestBody struct {
    Active bool `form:"name=active"`
    Currency *string `form:"name=currency"`
    Hidden *bool `form:"name=hidden"`
    LicenseTemplateNumber string `form:"name=licenseTemplateNumber"`
    LicenseeNumber string `form:"name=licenseeNumber"`
    Name *string `form:"name=name"`
    Number *string `form:"name=number"`
    Parentfeature *string `form:"name=parentfeature"`
    Price *float64 `form:"name=price"`
    Quantity *string `form:"name=quantity"`
    StartDate *time.Time `form:"name=startDate"`
    TimeVolume *string `form:"name=timeVolume"`
    TimeVolumePeriod *string `form:"name=timeVolumePeriod"`
    UsedQuantity *string `form:"name=usedQuantity"`
    
}

type CreateLicenseSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateLicenseRequest struct {
    Request CreateLicenseRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateLicenseSecurity 
    
}

type CreateLicenseResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

