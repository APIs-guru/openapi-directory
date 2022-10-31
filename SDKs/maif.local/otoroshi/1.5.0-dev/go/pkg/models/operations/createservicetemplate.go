package operations

import (
"openapi/pkg/models/shared")

type CreateServiceTemplatePathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type CreateServiceTemplateSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateServiceTemplateRequest struct {
    PathParams CreateServiceTemplatePathParams 
    Request *shared.ErrorTemplate `request:"mediaType=application/json"`
    Security CreateServiceTemplateSecurity 
    
}

type CreateServiceTemplateResponse struct {
    ContentType string 
    ErrorTemplate *shared.ErrorTemplate 
    StatusCode int64 
    
}

