package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAPISecretPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
}

type CreateAPISecretSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateAPISecretRequest struct {
	PathParams CreateAPISecretPathParams
	Request    shared.CreateSecretRequest `request:"mediaType=application/json"`
	Security   CreateAPISecretSecurity
}

type CreateAPISecretResponse struct {
	ContentType                          string
	ErrorAPIKeyNotFound                  *shared.ErrorAPIKeyNotFound
	StatusCode                           int64
	CreateAPISecret400ApplicationJSONAny *interface{}
	CreateAPISecret401ApplicationJSONAny *interface{}
	SecretInfo                           *shared.SecretInfo
}
