package operations

import (
"openapi/pkg/models/shared")

type GetProductModulePathParams struct {
    ProductModuleNumber string `pathParam:"style=simple,explode=false,name=productModuleNumber"`
    
}

type GetProductModuleSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetProductModuleRequest struct {
    PathParams GetProductModulePathParams 
    Security GetProductModuleSecurity 
    
}

type GetProductModuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

