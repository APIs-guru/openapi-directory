package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmUsersIDFederatedIdentityPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmUsersIDFederatedIdentityRequest struct {
	PathParams GetRealmUsersIDFederatedIdentityPathParams
}

type GetRealmUsersIDFederatedIdentityResponse struct {
	ContentType                      string
	FederatedIdentityRepresentations []shared.FederatedIdentityRepresentation
	StatusCode                       int64
}
