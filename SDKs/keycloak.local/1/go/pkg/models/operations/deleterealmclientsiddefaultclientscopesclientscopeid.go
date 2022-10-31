package operations

type DeleteRealmClientsIDDefaultClientScopesClientScopeIDPathParams struct {
	ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
	ID            string `pathParam:"style=simple,explode=false,name=id"`
	Realm         string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmClientsIDDefaultClientScopesClientScopeIDRequest struct {
	PathParams DeleteRealmClientsIDDefaultClientScopesClientScopeIDPathParams
}

type DeleteRealmClientsIDDefaultClientScopesClientScopeIDResponse struct {
	ContentType string
	StatusCode  int64
}
