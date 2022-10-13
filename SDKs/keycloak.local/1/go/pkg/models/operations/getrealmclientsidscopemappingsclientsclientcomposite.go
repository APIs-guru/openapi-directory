package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDScopeMappingsClientsClientCompositePathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDScopeMappingsClientsClientCompositeRequest struct {
	PathParams GetRealmClientsIDScopeMappingsClientsClientCompositePathParams
}

type GetRealmClientsIDScopeMappingsClientsClientCompositeResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
