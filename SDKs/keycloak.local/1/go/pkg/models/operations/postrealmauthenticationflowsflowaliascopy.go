package operations

type PostRealmAuthenticationFlowsFlowAliasCopyPathParams struct {
	FlowAlias string `pathParam:"style=simple,explode=false,name=flowAlias"`
	Realm     string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmAuthenticationFlowsFlowAliasCopyRequest struct {
	PathParams PostRealmAuthenticationFlowsFlowAliasCopyPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRealmAuthenticationFlowsFlowAliasCopyResponse struct {
	ContentType string
	StatusCode  int64
}
