package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientsIDRolesPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientsIDRolesRequest struct {
	PathParams PostRealmClientsIDRolesPathParams
	Request    shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientsIDRolesResponse struct {
	ContentType string
	StatusCode  int64
}
