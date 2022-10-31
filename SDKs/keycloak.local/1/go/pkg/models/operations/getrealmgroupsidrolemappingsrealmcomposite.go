package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmGroupsIDRoleMappingsRealmCompositePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmGroupsIDRoleMappingsRealmCompositeRequest struct {
	PathParams GetRealmGroupsIDRoleMappingsRealmCompositePathParams
}

type GetRealmGroupsIDRoleMappingsRealmCompositeResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
