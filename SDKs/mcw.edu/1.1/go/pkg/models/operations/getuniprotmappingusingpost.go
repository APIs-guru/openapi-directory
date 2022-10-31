package operations

import (
"openapi/pkg/models/shared")

type GetUniProtMappingUsingPostRequest struct {
    Request *shared.RgdidListRequest `request:"mediaType=application/json"`
    
}

type GetUniProtMappingUsingPostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

