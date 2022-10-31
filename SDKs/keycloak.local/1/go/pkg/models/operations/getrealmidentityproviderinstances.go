package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmIdentityProviderInstancesPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmIdentityProviderInstancesRequest struct {
	PathParams GetRealmIdentityProviderInstancesPathParams
}

type GetRealmIdentityProviderInstancesResponse struct {
	ContentType                     string
	IdentityProviderRepresentations []shared.IdentityProviderRepresentation
	StatusCode                      int64
}
