package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRealmGroupsIDRoleMappingsRealmPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmGroupsIDRoleMappingsRealmRequest struct {
	PathParams DeleteRealmGroupsIDRoleMappingsRealmPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type DeleteRealmGroupsIDRoleMappingsRealmResponse struct {
	ContentType string
	StatusCode  int64
}
