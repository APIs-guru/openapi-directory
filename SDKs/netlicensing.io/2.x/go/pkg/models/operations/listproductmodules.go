package operations

import (
"openapi/pkg/models/shared")

type ListProductModulesSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ListProductModulesRequest struct {
    Security ListProductModulesSecurity 
    
}

type ListProductModulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensings []interface{} 
    
}

