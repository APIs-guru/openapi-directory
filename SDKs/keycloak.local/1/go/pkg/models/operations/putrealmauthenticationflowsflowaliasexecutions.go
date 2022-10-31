package operations

import (
"openapi/pkg/models/shared")

type PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams struct {
    FlowAlias string `pathParam:"style=simple,explode=false,name=flowAlias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmAuthenticationFlowsFlowAliasExecutionsRequest struct {
    PathParams PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams 
    Request shared.AuthenticationExecutionInfoRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmAuthenticationFlowsFlowAliasExecutionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

