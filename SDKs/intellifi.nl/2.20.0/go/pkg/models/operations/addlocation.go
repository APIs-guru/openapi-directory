package operations

import (
"openapi/pkg/models/shared")

type AddLocationRequest struct {
    Request shared.Location `request:"mediaType=application/json"`
    
}

type AddLocationResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

