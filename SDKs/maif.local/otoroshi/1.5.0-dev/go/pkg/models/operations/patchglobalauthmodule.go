package operations

import (
	"openapi/pkg/models/shared"
)

type PatchGlobalAuthModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchGlobalAuthModuleSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchGlobalAuthModuleRequest struct {
	PathParams PatchGlobalAuthModulePathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchGlobalAuthModuleSecurity
}

type PatchGlobalAuthModuleResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	PatchGlobalAuthModule200ApplicationJSONOneOf *interface{}
}
