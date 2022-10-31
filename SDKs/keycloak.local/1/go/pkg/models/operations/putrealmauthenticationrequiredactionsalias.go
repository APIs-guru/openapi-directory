package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmAuthenticationRequiredActionsAliasPathParams struct {
	Alias string `pathParam:"style=simple,explode=false,name=alias"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmAuthenticationRequiredActionsAliasRequest struct {
	PathParams PutRealmAuthenticationRequiredActionsAliasPathParams
	Request    shared.RequiredActionProviderRepresentation `request:"mediaType=application/json"`
}

type PutRealmAuthenticationRequiredActionsAliasResponse struct {
	ContentType string
	StatusCode  int64
}
