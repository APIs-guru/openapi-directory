package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmRolesByIDRoleIDPathParams struct {
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
	RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
}

type PutRealmRolesByIDRoleIDRequest struct {
	PathParams PutRealmRolesByIDRoleIDPathParams
	Request    shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PutRealmRolesByIDRoleIDResponse struct {
	ContentType string
	StatusCode  int64
}
