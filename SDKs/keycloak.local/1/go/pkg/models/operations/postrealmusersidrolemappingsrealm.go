package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmUsersIDRoleMappingsRealmPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUsersIDRoleMappingsRealmRequest struct {
	PathParams PostRealmUsersIDRoleMappingsRealmPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PostRealmUsersIDRoleMappingsRealmResponse struct {
	ContentType string
	StatusCode  int64
}
