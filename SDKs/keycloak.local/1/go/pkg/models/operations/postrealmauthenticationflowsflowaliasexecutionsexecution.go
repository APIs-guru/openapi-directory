package operations

type PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionPathParams struct {
	FlowAlias string `pathParam:"style=simple,explode=false,name=flowAlias"`
	Realm     string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest struct {
	PathParams PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse struct {
	ContentType string
	StatusCode  int64
}
