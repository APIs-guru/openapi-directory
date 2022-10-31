package operations

import (
"openapi/pkg/models/shared")

type GetEnsemblProteinMappingUsingPostRequest struct {
    Request *shared.RgdidListRequest `request:"mediaType=application/json"`
    
}

type GetEnsemblProteinMappingUsingPostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

