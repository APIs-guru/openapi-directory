package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmAuthenticationConfigDescriptionProviderIDPathParams struct {
	ProviderID string `pathParam:"style=simple,explode=false,name=providerId"`
	Realm      string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationConfigDescriptionProviderIDRequest struct {
	PathParams GetRealmAuthenticationConfigDescriptionProviderIDPathParams
}

type GetRealmAuthenticationConfigDescriptionProviderIDResponse struct {
	AuthenticatorConfigInfoRepresentation *shared.AuthenticatorConfigInfoRepresentation
	ContentType                           string
	StatusCode                            int64
}
