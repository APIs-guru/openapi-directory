package operations

type PostRealmAuthenticationExecutionsExecutionIDRaisePriorityPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	Realm       string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmAuthenticationExecutionsExecutionIDRaisePriorityRequest struct {
	PathParams PostRealmAuthenticationExecutionsExecutionIDRaisePriorityPathParams
}

type PostRealmAuthenticationExecutionsExecutionIDRaisePriorityResponse struct {
	ContentType string
	StatusCode  int64
}
