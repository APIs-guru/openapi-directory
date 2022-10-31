package operations

type PutRealmClientsIDDefaultClientScopesClientScopeIDPathParams struct {
	ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
	ID            string `pathParam:"style=simple,explode=false,name=id"`
	Realm         string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmClientsIDDefaultClientScopesClientScopeIDRequest struct {
	PathParams PutRealmClientsIDDefaultClientScopesClientScopeIDPathParams
}

type PutRealmClientsIDDefaultClientScopesClientScopeIDResponse struct {
	ContentType string
	StatusCode  int64
}
