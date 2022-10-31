package operations

import (
"openapi/pkg/models/shared")

type UpdateGlobalAuthModulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateGlobalAuthModuleSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateGlobalAuthModuleRequest struct {
    PathParams UpdateGlobalAuthModulePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    Security UpdateGlobalAuthModuleSecurity 
    
}

type UpdateGlobalAuthModuleResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateGlobalAuthModule200ApplicationJSONOneOf *interface{} 
    
}

