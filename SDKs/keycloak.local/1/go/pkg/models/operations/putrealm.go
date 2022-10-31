package operations

import (
"openapi/pkg/models/shared")

type PutRealmPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmRequest struct {
    PathParams PutRealmPathParams 
    Request shared.RealmRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmResponse struct {
    ContentType string 
    StatusCode int64 
    
}

