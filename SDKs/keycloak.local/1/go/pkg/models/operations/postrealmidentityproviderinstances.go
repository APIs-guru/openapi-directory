package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmIdentityProviderInstancesPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmIdentityProviderInstancesRequest struct {
	PathParams PostRealmIdentityProviderInstancesPathParams
	Request    shared.IdentityProviderRepresentation `request:"mediaType=application/json"`
}

type PostRealmIdentityProviderInstancesResponse struct {
	ContentType string
	StatusCode  int64
}
