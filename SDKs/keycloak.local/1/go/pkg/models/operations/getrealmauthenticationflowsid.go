package operations

import (
"openapi/pkg/models/shared")

type GetRealmAuthenticationFlowsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmAuthenticationFlowsIDRequest struct {
    PathParams GetRealmAuthenticationFlowsIDPathParams 
    
}

type GetRealmAuthenticationFlowsIDResponse struct {
    AuthenticationFlowRepresentation *shared.AuthenticationFlowRepresentation 
    ContentType string 
    StatusCode int64 
    
}

