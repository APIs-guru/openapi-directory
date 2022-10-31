package operations



type PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams struct {
    FlowAlias string `pathParam:"style=simple,explode=false,name=flowAlias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest struct {
    PathParams PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

