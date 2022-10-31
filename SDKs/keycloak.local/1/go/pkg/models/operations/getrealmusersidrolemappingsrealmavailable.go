package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmUsersIDRoleMappingsRealmAvailablePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmUsersIDRoleMappingsRealmAvailableRequest struct {
	PathParams GetRealmUsersIDRoleMappingsRealmAvailablePathParams
}

type GetRealmUsersIDRoleMappingsRealmAvailableResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
