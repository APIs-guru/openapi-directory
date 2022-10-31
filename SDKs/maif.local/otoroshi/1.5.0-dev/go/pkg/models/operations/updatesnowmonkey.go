package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSnowMonkeySecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateSnowMonkeyRequest struct {
	Request  *shared.Group `request:"mediaType=application/json"`
	Security UpdateSnowMonkeySecurity
}

type UpdateSnowMonkeyResponse struct {
	ContentType      string
	SnowMonkeyConfig *shared.SnowMonkeyConfig
	StatusCode       int64
}
