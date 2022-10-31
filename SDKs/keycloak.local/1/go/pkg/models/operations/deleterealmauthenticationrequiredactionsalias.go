package operations

type DeleteRealmAuthenticationRequiredActionsAliasPathParams struct {
	Alias string `pathParam:"style=simple,explode=false,name=alias"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmAuthenticationRequiredActionsAliasRequest struct {
	PathParams DeleteRealmAuthenticationRequiredActionsAliasPathParams
}

type DeleteRealmAuthenticationRequiredActionsAliasResponse struct {
	ContentType string
	StatusCode  int64
}
