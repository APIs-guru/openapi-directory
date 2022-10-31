package operations

import (
"openapi/pkg/models/shared")

type PutRealmAuthenticationFlowsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmAuthenticationFlowsIDRequest struct {
    PathParams PutRealmAuthenticationFlowsIDPathParams 
    Request shared.AuthenticationFlowRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmAuthenticationFlowsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

