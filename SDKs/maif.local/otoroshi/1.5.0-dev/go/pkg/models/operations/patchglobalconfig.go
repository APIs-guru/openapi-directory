package operations

import (
	"openapi/pkg/models/shared"
)

type PatchGlobalConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchGlobalConfigRequest struct {
	Request  []shared.Patch `request:"mediaType=application/json"`
	Security PatchGlobalConfigSecurity
}

type PatchGlobalConfigResponse struct {
	ContentType  string
	GlobalConfig *shared.GlobalConfig
	StatusCode   int64
}
