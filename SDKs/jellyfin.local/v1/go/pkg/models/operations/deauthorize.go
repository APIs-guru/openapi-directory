package operations

import (
	"openapi/pkg/models/shared"
)

type DeauthorizeSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeauthorizeRequest struct {
	Security DeauthorizeSecurity
}

type DeauthorizeResponse struct {
	ContentType                               string
	Deauthorize200ApplicationJSONInt32Integer *int32
	StatusCode                                int64
}
