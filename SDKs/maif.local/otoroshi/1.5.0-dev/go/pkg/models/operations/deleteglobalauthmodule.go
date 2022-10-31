package operations

import (
"openapi/pkg/models/shared")

type DeleteGlobalAuthModulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteGlobalAuthModuleSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteGlobalAuthModuleRequest struct {
    PathParams DeleteGlobalAuthModulePathParams 
    Security DeleteGlobalAuthModuleSecurity 
    
}

type DeleteGlobalAuthModuleResponse struct {
    ContentType string 
    Deleted *shared.Deleted 
    StatusCode int64 
    
}

