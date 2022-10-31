package operations

import (
"openapi/pkg/models/shared")

type AsyncVrpRequest struct {
    Request shared.Request `request:"mediaType=application/json"`
    
}

type AsyncVrpResponse struct {
    BadRequest *shared.BadRequest 
    ContentType string 
    Headers map[string][]string 
    InternalErrorMessage *shared.InternalErrorMessage 
    JobID *shared.JobID 
    StatusCode int64 
    
}

