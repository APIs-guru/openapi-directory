package operations

type DeleteRealmAuthenticationFlowsIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmAuthenticationFlowsIDRequest struct {
	PathParams DeleteRealmAuthenticationFlowsIDPathParams
}

type DeleteRealmAuthenticationFlowsIDResponse struct {
	ContentType string
	StatusCode  int64
}
