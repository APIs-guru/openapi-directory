package operations

import (
"openapi/pkg/models/shared")

type GetWorkerStatusSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkerStatusRequest struct {
    Security GetWorkerStatusSecurity 
    
}

type GetWorkerStatusResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

