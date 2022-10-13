package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmRolesByIDRoleIDCompositesPathParams struct {
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
	RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
}

type GetRealmRolesByIDRoleIDCompositesRequest struct {
	PathParams GetRealmRolesByIDRoleIDCompositesPathParams
}

type GetRealmRolesByIDRoleIDCompositesResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
