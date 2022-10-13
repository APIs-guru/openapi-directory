package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDOptionalClientScopesPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDOptionalClientScopesRequest struct {
	PathParams GetRealmClientsIDOptionalClientScopesPathParams
}

type GetRealmClientsIDOptionalClientScopesResponse struct {
	ClientScopeRepresentations []shared.ClientScopeRepresentation
	ContentType                string
	StatusCode                 int64
}
