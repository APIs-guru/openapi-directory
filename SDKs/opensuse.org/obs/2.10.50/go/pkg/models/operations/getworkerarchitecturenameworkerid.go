package operations

import (
"openapi/pkg/models/shared")

type GetWorkerArchitectureNameWorkerIDPathParams struct {
    ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
    WorkerID string `pathParam:"style=simple,explode=false,name=worker_id"`
    
}

type GetWorkerArchitectureNameWorkerIDSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkerArchitectureNameWorkerIDRequest struct {
    PathParams GetWorkerArchitectureNameWorkerIDPathParams 
    Security GetWorkerArchitectureNameWorkerIDSecurity 
    
}

type GetWorkerArchitectureNameWorkerIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

