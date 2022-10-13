package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesIDRequest struct {
	PathParams GetRealmClientScopesIDPathParams
}

type GetRealmClientScopesIDResponse struct {
	ClientScopeRepresentation *shared.ClientScopeRepresentation
	ContentType               string
	StatusCode                int64
}
