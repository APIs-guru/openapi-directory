package operations

import (
"openapi/pkg/models/shared")

type SolveVrpRequest struct {
    Request shared.Request `request:"mediaType=application/json"`
    
}

type SolveVrpResponse struct {
    BadRequest *shared.BadRequest 
    ContentType string 
    Headers map[string][]string 
    InternalErrorMessage *shared.InternalErrorMessage 
    Response *shared.Response 
    StatusCode int64 
    
}

