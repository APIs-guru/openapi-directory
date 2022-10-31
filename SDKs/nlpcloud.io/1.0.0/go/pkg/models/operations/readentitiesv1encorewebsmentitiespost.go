package operations

import (
"openapi/pkg/models/shared")

type ReadEntitiesV1EnCoreWebSmEntitiesPostRequest struct {
    Request shared.UserRequestIn `request:"mediaType=application/json"`
    
}

type ReadEntitiesV1EnCoreWebSmEntitiesPostResponse struct {
    ContentType string 
    EntitiesOut *shared.EntitiesOut 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

