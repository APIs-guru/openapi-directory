package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesRequest struct {
	PathParams GetRealmClientScopesPathParams
}

type GetRealmClientScopesResponse struct {
	ClientScopeRepresentations []shared.ClientScopeRepresentation
	ContentType                string
	StatusCode                 int64
}
