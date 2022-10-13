package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientScopesPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientScopesRequest struct {
	PathParams PostRealmClientScopesPathParams
	Request    shared.ClientScopeRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientScopesResponse struct {
	ContentType string
	StatusCode  int64
}
