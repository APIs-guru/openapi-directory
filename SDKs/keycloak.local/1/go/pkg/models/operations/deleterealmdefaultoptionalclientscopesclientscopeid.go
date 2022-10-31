package operations

type DeleteRealmDefaultOptionalClientScopesClientScopeIDPathParams struct {
	ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
	Realm         string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmDefaultOptionalClientScopesClientScopeIDRequest struct {
	PathParams DeleteRealmDefaultOptionalClientScopesClientScopeIDPathParams
}

type DeleteRealmDefaultOptionalClientScopesClientScopeIDResponse struct {
	ContentType string
	StatusCode  int64
}
