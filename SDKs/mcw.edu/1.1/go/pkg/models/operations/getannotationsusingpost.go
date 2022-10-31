package operations

import (
"openapi/pkg/models/shared")

type GetAnnotationsUsingPostRequest struct {
    Request *shared.AnnotationRequest `request:"mediaType=application/json"`
    
}

type GetAnnotationsUsingPostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

