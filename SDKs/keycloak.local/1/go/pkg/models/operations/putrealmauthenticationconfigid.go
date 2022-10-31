package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmAuthenticationConfigIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmAuthenticationConfigIDRequest struct {
	PathParams PutRealmAuthenticationConfigIDPathParams
	Request    shared.AuthenticatorConfigRepresentation `request:"mediaType=application/json"`
}

type PutRealmAuthenticationConfigIDResponse struct {
	ContentType string
	StatusCode  int64
}
