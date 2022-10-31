package operations

type GetRealmAuthenticationExecutionsExecutionIDPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	Realm       string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationExecutionsExecutionIDRequest struct {
	PathParams GetRealmAuthenticationExecutionsExecutionIDPathParams
}

type GetRealmAuthenticationExecutionsExecutionIDResponse struct {
	ContentType string
	StatusCode  int64
}
