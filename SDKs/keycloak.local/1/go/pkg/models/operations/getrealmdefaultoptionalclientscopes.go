package operations

import (
"openapi/pkg/models/shared")

type GetRealmDefaultOptionalClientScopesPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmDefaultOptionalClientScopesRequest struct {
    PathParams GetRealmDefaultOptionalClientScopesPathParams 
    
}

type GetRealmDefaultOptionalClientScopesResponse struct {
    ClientScopeRepresentations []shared.ClientScopeRepresentation 
    ContentType string 
    StatusCode int64 
    
}

