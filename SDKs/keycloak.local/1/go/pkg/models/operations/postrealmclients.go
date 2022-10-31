package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientsRequest struct {
    PathParams PostRealmClientsPathParams 
    Request shared.ClientRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmClientsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

