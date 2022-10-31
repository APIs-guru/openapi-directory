package operations

type PutRealmDefaultOptionalClientScopesClientScopeIDPathParams struct {
	ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
	Realm         string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmDefaultOptionalClientScopesClientScopeIDRequest struct {
	PathParams PutRealmDefaultOptionalClientScopesClientScopeIDPathParams
}

type PutRealmDefaultOptionalClientScopesClientScopeIDResponse struct {
	ContentType string
	StatusCode  int64
}
