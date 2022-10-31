package operations

import (
"openapi/pkg/models/shared")

type PostMappingRequest struct {
    Request []shared.MappingJob `request:"mediaType=application/json"`
    
}

type PostMappingResponse struct {
    BulkMappingJobResult []interface{} 
    ContentType string 
    PostMapping400WildcardString *string 
    PostMapping401WildcardString *string 
    PostMapping406WildcardString *string 
    PostMapping413WildcardString *string 
    PostMapping500WildcardString *string 
    StatusCode int64 
    
}

