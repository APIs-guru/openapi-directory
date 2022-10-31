package operations

import (
"openapi/pkg/models/shared")

type ReadDependenciesV1EnCoreWebSmDependenciesPostRequest struct {
    Request shared.UserRequestIn `request:"mediaType=application/json"`
    
}

type ReadDependenciesV1EnCoreWebSmDependenciesPostResponse struct {
    ContentType string 
    DependenciesOut *shared.DependenciesOut 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

