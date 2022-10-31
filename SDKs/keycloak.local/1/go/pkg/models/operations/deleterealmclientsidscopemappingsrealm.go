package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRealmClientsIDScopeMappingsRealmPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmClientsIDScopeMappingsRealmRequest struct {
	PathParams DeleteRealmClientsIDScopeMappingsRealmPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type DeleteRealmClientsIDScopeMappingsRealmResponse struct {
	ContentType string
	StatusCode  int64
}
