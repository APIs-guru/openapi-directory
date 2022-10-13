package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDScopeMappingsRealmCompositePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDScopeMappingsRealmCompositeRequest struct {
	PathParams GetRealmClientsIDScopeMappingsRealmCompositePathParams
}

type GetRealmClientsIDScopeMappingsRealmCompositeResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
