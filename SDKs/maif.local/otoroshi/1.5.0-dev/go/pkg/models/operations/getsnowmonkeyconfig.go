package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnowMonkeyConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type GetSnowMonkeyConfigRequest struct {
	Security GetSnowMonkeyConfigSecurity
}

type GetSnowMonkeyConfigResponse struct {
	ContentType      string
	SnowMonkeyConfig *shared.SnowMonkeyConfig
	StatusCode       int64
}
