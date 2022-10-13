package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmAuthenticationConfigIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationConfigIDRequest struct {
	PathParams GetRealmAuthenticationConfigIDPathParams
}

type GetRealmAuthenticationConfigIDResponse struct {
	AuthenticatorConfigRepresentation *shared.AuthenticatorConfigRepresentation
	ContentType                       string
	StatusCode                        int64
}
