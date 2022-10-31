package operations

import (
"openapi/pkg/models/shared")

type GetOrthologsByListUsingPostRequest struct {
    Request shared.OrthologRequest `request:"mediaType=application/json"`
    
}

type GetOrthologsByListUsingPostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

