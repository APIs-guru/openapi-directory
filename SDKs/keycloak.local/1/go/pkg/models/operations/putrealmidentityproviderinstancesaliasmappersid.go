package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmIdentityProviderInstancesAliasMappersIDPathParams struct {
	Alias string `pathParam:"style=simple,explode=false,name=alias"`
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmIdentityProviderInstancesAliasMappersIDRequest struct {
	PathParams PutRealmIdentityProviderInstancesAliasMappersIDPathParams
	Request    shared.IdentityProviderMapperRepresentation `request:"mediaType=application/json"`
}

type PutRealmIdentityProviderInstancesAliasMappersIDResponse struct {
	ContentType string
	StatusCode  int64
}
