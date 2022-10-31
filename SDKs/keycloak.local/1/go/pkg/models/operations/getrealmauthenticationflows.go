package operations

import (
"openapi/pkg/models/shared")

type GetRealmAuthenticationFlowsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmAuthenticationFlowsRequest struct {
    PathParams GetRealmAuthenticationFlowsPathParams 
    
}

type GetRealmAuthenticationFlowsResponse struct {
    AuthenticationFlowRepresentations []shared.AuthenticationFlowRepresentation 
    ContentType string 
    StatusCode int64 
    
}

