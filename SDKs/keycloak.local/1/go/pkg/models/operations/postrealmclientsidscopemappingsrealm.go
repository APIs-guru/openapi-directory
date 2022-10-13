package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientsIDScopeMappingsRealmPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientsIDScopeMappingsRealmRequest struct {
	PathParams PostRealmClientsIDScopeMappingsRealmPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientsIDScopeMappingsRealmResponse struct {
	ContentType string
	StatusCode  int64
}
