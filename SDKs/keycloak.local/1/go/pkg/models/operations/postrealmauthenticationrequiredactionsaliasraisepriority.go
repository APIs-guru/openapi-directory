package operations

type PostRealmAuthenticationRequiredActionsAliasRaisePriorityPathParams struct {
	Alias string `pathParam:"style=simple,explode=false,name=alias"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest struct {
	PathParams PostRealmAuthenticationRequiredActionsAliasRaisePriorityPathParams
}

type PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse struct {
	ContentType string
	StatusCode  int64
}
