package operations

type DeleteRealmAuthenticationExecutionsExecutionIDPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	Realm       string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmAuthenticationExecutionsExecutionIDRequest struct {
	PathParams DeleteRealmAuthenticationExecutionsExecutionIDPathParams
}

type DeleteRealmAuthenticationExecutionsExecutionIDResponse struct {
	ContentType string
	StatusCode  int64
}
