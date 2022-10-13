package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnowMonkeyOutagesSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type GetSnowMonkeyOutagesRequest struct {
	Security GetSnowMonkeyOutagesSecurity
}

type GetSnowMonkeyOutagesResponse struct {
	ContentType string
	Outages     []shared.Outage
	StatusCode  int64
}
