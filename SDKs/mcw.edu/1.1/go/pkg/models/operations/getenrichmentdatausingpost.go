package operations

import (
"openapi/pkg/models/shared")

type GetEnrichmentDataUsingPostRequest struct {
    Request shared.EnrichmentGeneRequest `request:"mediaType=application/json"`
    
}

type GetEnrichmentDataUsingPostResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

