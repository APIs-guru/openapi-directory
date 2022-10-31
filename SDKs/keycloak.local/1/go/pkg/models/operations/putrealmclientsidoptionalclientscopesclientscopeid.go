package operations

type PutRealmClientsIDOptionalClientScopesClientScopeIDPathParams struct {
	ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
	ID            string `pathParam:"style=simple,explode=false,name=id"`
	Realm         string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmClientsIDOptionalClientScopesClientScopeIDRequest struct {
	PathParams PutRealmClientsIDOptionalClientScopesClientScopeIDPathParams
}

type PutRealmClientsIDOptionalClientScopesClientScopeIDResponse struct {
	ContentType string
	StatusCode  int64
}
