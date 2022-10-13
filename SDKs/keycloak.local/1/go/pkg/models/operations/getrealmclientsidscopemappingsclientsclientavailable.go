package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDScopeMappingsClientsClientAvailablePathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDScopeMappingsClientsClientAvailableRequest struct {
	PathParams GetRealmClientsIDScopeMappingsClientsClientAvailablePathParams
}

type GetRealmClientsIDScopeMappingsClientsClientAvailableResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
