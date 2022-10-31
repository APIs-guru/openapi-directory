package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeAPISecretPathParams struct {
	APIKey   string `pathParam:"style=simple,explode=false,name=api_key"`
	SecretID string `pathParam:"style=simple,explode=false,name=secret_id"`
}

type RevokeAPISecretSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type RevokeAPISecretRequest struct {
	PathParams RevokeAPISecretPathParams
	Security   RevokeAPISecretSecurity
}

type RevokeAPISecretResponse struct {
	ContentType                            string
	StatusCode                             int64
	RevokeAPISecret401ApplicationJSONAny   *interface{}
	RevokeAPISecret403ApplicationJSONAny   *interface{}
	RevokeAPISecret404ApplicationJSONOneOf *interface{}
}
