package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientScopesIDScopeMappingsClientsClientPathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientScopesIDScopeMappingsClientsClientRequest struct {
	PathParams PostRealmClientScopesIDScopeMappingsClientsClientPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientScopesIDScopeMappingsClientsClientResponse struct {
	ContentType string
	StatusCode  int64
}
