package operations

import (
	"openapi/pkg/models/shared"
)

type CheckKeyUsabilityPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type CheckKeyUsabilityQueryParams struct {
	UserToken *string `queryParam:"style=form,explode=true,name=user_token"`
}

type CheckKeyUsabilitySecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type CheckKeyUsabilityRequest struct {
	PathParams  CheckKeyUsabilityPathParams
	QueryParams CheckKeyUsabilityQueryParams
	Security    CheckKeyUsabilitySecurity
}

type CheckKeyUsabilityResponse struct {
	AddressLookupResponseSchema *shared.AddressLookupResponseSchema
	ContentType                 string
	KeyUsabilityResponseSchema  *shared.KeyUsabilityResponseSchema
	StatusCode                  int64
}
