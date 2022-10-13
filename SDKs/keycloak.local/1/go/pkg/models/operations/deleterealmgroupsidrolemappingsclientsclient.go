package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRealmGroupsIDRoleMappingsClientsClientPathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmGroupsIDRoleMappingsClientsClientRequest struct {
	PathParams DeleteRealmGroupsIDRoleMappingsClientsClientPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type DeleteRealmGroupsIDRoleMappingsClientsClientResponse struct {
	ContentType string
	StatusCode  int64
}
