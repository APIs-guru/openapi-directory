package operations

import (
	"openapi/pkg/models/shared"
)

type GlobalConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type GlobalConfigRequest struct {
	Security GlobalConfigSecurity
}

type GlobalConfigResponse struct {
	ContentType  string
	GlobalConfig *shared.GlobalConfig
	StatusCode   int64
}
