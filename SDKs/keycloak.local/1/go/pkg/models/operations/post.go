package operations

import (
"openapi/pkg/models/shared")

type PostRequest struct {
    Request shared.RealmRepresentation `request:"mediaType=application/json"`
    
}

type PostResponse struct {
    ContentType string 
    StatusCode int64 
    
}

