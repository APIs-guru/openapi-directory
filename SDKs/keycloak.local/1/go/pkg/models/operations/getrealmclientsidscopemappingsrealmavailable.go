package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDScopeMappingsRealmAvailablePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDScopeMappingsRealmAvailableRequest struct {
	PathParams GetRealmClientsIDScopeMappingsRealmAvailablePathParams
}

type GetRealmClientsIDScopeMappingsRealmAvailableResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
