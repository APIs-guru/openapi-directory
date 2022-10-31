package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDDefaultClientScopesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDDefaultClientScopesRequest struct {
    PathParams GetRealmClientsIDDefaultClientScopesPathParams 
    
}

type GetRealmClientsIDDefaultClientScopesResponse struct {
    ClientScopeRepresentations []shared.ClientScopeRepresentation 
    ContentType string 
    StatusCode int64 
    
}

