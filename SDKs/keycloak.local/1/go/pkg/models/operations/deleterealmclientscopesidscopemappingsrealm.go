package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRealmClientScopesIDScopeMappingsRealmPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmClientScopesIDScopeMappingsRealmRequest struct {
	PathParams DeleteRealmClientScopesIDScopeMappingsRealmPathParams
	Request    []shared.RoleRepresentation `request:"mediaType=application/json"`
}

type DeleteRealmClientScopesIDScopeMappingsRealmResponse struct {
	ContentType string
	StatusCode  int64
}
