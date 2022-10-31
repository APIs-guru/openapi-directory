package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesIDScopeMappingsClientsClientCompositePathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesIDScopeMappingsClientsClientCompositeRequest struct {
	PathParams GetRealmClientScopesIDScopeMappingsClientsClientCompositePathParams
}

type GetRealmClientScopesIDScopeMappingsClientsClientCompositeResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
