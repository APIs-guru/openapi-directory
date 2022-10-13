package operations

import (
	"openapi/pkg/models/shared"
)

type PutGlobalConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PutGlobalConfigRequest struct {
	Request  *shared.GlobalConfig `request:"mediaType=application/json"`
	Security PutGlobalConfigSecurity
}

type PutGlobalConfigResponse struct {
	ContentType  string
	GlobalConfig *shared.GlobalConfig
	StatusCode   int64
}
