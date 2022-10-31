package operations

type PutRealmDefaultDefaultClientScopesClientScopeIDPathParams struct {
	ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
	Realm         string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmDefaultDefaultClientScopesClientScopeIDRequest struct {
	PathParams PutRealmDefaultDefaultClientScopesClientScopeIDPathParams
}

type PutRealmDefaultDefaultClientScopesClientScopeIDResponse struct {
	ContentType string
	StatusCode  int64
}
