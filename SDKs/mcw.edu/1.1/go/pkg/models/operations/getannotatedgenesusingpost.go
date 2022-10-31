package operations

import (
"openapi/pkg/models/shared")

type GetAnnotatedGenesUsingPostRequest struct {
    Request *shared.AnnotatedGeneRequest `request:"mediaType=application/json"`
    
}

type GetAnnotatedGenesUsingPostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

