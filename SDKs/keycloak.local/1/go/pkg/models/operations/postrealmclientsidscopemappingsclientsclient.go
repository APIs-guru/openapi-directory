package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientsIDScopeMappingsClientsClientPathParams struct {
	Client string `pathParam:"style=simple,explode=false,name=client"`
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientsIDScopeMappingsClientsClientRequest struct {
	PathParams PostRealmClientsIDScopeMappingsClientsClientPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientsIDScopeMappingsClientsClientResponse struct {
	ContentType string
	StatusCode  int64
}
