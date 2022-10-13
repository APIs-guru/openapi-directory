package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDScopeMappingsClientsClientPathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDScopeMappingsClientsClientRequest struct {
	PathParams GetRealmClientsIDScopeMappingsClientsClientPathParams
}

type GetRealmClientsIDScopeMappingsClientsClientResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
