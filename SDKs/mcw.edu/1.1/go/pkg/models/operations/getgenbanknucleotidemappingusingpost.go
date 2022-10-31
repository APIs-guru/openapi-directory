package operations

import (
"openapi/pkg/models/shared")

type GetGenBankNucleotideMappingUsingPostRequest struct {
    Request *shared.RgdidListRequest `request:"mediaType=application/json"`
    
}

type GetGenBankNucleotideMappingUsingPostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

