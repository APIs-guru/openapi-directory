package operations

import (
"openapi/pkg/models/shared")

type PutRealmClientsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmClientsIDRequest struct {
    PathParams PutRealmClientsIDPathParams 
    Request shared.ClientRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmClientsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

