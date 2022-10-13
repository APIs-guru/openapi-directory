package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmGroupsIDRoleMappingsClientsClientPathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmGroupsIDRoleMappingsClientsClientRequest struct {
	PathParams GetRealmGroupsIDRoleMappingsClientsClientPathParams
}

type GetRealmGroupsIDRoleMappingsClientsClientResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
