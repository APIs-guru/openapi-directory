package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmAuthenticationRequiredActionsAliasPathParams struct {
	Alias string `pathParam:"style=simple,explode=false,name=alias"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationRequiredActionsAliasRequest struct {
	PathParams GetRealmAuthenticationRequiredActionsAliasPathParams
}

type GetRealmAuthenticationRequiredActionsAliasResponse struct {
	ContentType                          string
	RequiredActionProviderRepresentation *shared.RequiredActionProviderRepresentation
	StatusCode                           int64
}
