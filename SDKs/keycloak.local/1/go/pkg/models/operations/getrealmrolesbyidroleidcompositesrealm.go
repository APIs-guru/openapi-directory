package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmRolesByIDRoleIDCompositesRealmPathParams struct {
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
	RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
}

type GetRealmRolesByIDRoleIDCompositesRealmRequest struct {
	PathParams GetRealmRolesByIDRoleIDCompositesRealmPathParams
}

type GetRealmRolesByIDRoleIDCompositesRealmResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
