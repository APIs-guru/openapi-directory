package operations

import (
	"openapi/pkg/models/shared"
)

type PatchAPIKeyPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type PatchAPIKeySecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchAPIKeyRequest struct {
	PathParams PatchAPIKeyPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchAPIKeySecurity
}

type PatchAPIKeyResponse struct {
	APIKey      *shared.APIKey
	ContentType string
	StatusCode  int64
}
