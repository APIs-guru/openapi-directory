package operations

import (
"openapi/pkg/models/shared")

type DeleteLicenseTemplatePathParams struct {
    LicenseTemplateNumber string `pathParam:"style=simple,explode=false,name=licenseTemplateNumber"`
    
}

type DeleteLicenseTemplateQueryParams struct {
    ForceCascade *bool `queryParam:"style=form,explode=true,name=forceCascade"`
    
}

type DeleteLicenseTemplateSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteLicenseTemplateRequest struct {
    PathParams DeleteLicenseTemplatePathParams 
    QueryParams DeleteLicenseTemplateQueryParams 
    Security DeleteLicenseTemplateSecurity 
    
}

type DeleteLicenseTemplateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

