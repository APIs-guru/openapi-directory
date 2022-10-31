package operations



type GetRealmAuthenticationFlowsFlowAliasExecutionsPathParams struct {
    FlowAlias string `pathParam:"style=simple,explode=false,name=flowAlias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmAuthenticationFlowsFlowAliasExecutionsRequest struct {
    PathParams GetRealmAuthenticationFlowsFlowAliasExecutionsPathParams 
    
}

type GetRealmAuthenticationFlowsFlowAliasExecutionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

