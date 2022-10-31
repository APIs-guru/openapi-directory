package operations

import (
"openapi/pkg/models/shared")

type GetRealmDefaultDefaultClientScopesPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmDefaultDefaultClientScopesRequest struct {
    PathParams GetRealmDefaultDefaultClientScopesPathParams 
    
}

type GetRealmDefaultDefaultClientScopesResponse struct {
    ClientScopeRepresentations []shared.ClientScopeRepresentation 
    ContentType string 
    StatusCode int64 
    
}

