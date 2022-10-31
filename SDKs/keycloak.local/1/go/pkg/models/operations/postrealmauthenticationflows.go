package operations

import (
"openapi/pkg/models/shared")

type PostRealmAuthenticationFlowsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmAuthenticationFlowsRequest struct {
    PathParams PostRealmAuthenticationFlowsPathParams 
    Request shared.AuthenticationFlowRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmAuthenticationFlowsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

