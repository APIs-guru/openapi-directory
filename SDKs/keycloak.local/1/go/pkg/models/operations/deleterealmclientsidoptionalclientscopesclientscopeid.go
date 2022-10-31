package operations

type DeleteRealmClientsIDOptionalClientScopesClientScopeIDPathParams struct {
	ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
	ID            string `pathParam:"style=simple,explode=false,name=id"`
	Realm         string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmClientsIDOptionalClientScopesClientScopeIDRequest struct {
	PathParams DeleteRealmClientsIDOptionalClientScopesClientScopeIDPathParams
}

type DeleteRealmClientsIDOptionalClientScopesClientScopeIDResponse struct {
	ContentType string
	StatusCode  int64
}
