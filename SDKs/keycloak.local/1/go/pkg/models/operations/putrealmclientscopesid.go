package operations

import (
"openapi/pkg/models/shared")

type PutRealmClientScopesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmClientScopesIDRequest struct {
    PathParams PutRealmClientScopesIDPathParams 
    Request shared.ClientScopeRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmClientScopesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

