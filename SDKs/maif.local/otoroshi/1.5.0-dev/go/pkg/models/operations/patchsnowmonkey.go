package operations

import (
	"openapi/pkg/models/shared"
)

type PatchSnowMonkeySecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchSnowMonkeyRequest struct {
	Request  *shared.Group `request:"mediaType=application/json"`
	Security PatchSnowMonkeySecurity
}

type PatchSnowMonkeyResponse struct {
	ContentType      string
	SnowMonkeyConfig *shared.SnowMonkeyConfig
	StatusCode       int64
}
