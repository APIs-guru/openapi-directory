package operations

import (
"openapi/pkg/models/shared")

type FindAllGlobalAuthModulesSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FindAllGlobalAuthModulesRequest struct {
    Security FindAllGlobalAuthModulesSecurity 
    
}

type FindAllGlobalAuthModulesResponse struct {
    ContentType string 
    StatusCode int64 
    FindAllGlobalAuthModules200ApplicationJSONOneoves []interface{} 
    
}

