package operations

import (
"openapi/pkg/models/shared")

type GetEnrichmentDataUsingPost1Request struct {
    Request shared.EnrichmentRequest `request:"mediaType=application/json"`
    
}

type GetEnrichmentDataUsingPost1Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

