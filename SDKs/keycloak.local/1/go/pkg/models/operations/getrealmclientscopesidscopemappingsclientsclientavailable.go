package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesIDScopeMappingsClientsClientAvailablePathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesIDScopeMappingsClientsClientAvailableRequest struct {
	PathParams GetRealmClientScopesIDScopeMappingsClientsClientAvailablePathParams
}

type GetRealmClientScopesIDScopeMappingsClientsClientAvailableResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
