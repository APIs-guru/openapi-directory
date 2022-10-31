package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDScopeMappingsRealmPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDScopeMappingsRealmRequest struct {
	PathParams GetRealmClientsIDScopeMappingsRealmPathParams
}

type GetRealmClientsIDScopeMappingsRealmResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
