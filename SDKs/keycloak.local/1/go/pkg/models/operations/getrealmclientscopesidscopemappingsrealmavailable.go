package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesIDScopeMappingsRealmAvailablePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesIDScopeMappingsRealmAvailableRequest struct {
	PathParams GetRealmClientScopesIDScopeMappingsRealmAvailablePathParams
}

type GetRealmClientScopesIDScopeMappingsRealmAvailableResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
