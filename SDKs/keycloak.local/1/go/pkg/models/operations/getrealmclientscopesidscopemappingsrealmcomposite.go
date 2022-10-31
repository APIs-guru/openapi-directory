package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesIDScopeMappingsRealmCompositePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesIDScopeMappingsRealmCompositeRequest struct {
	PathParams GetRealmClientScopesIDScopeMappingsRealmCompositePathParams
}

type GetRealmClientScopesIDScopeMappingsRealmCompositeResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
