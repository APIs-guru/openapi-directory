package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGlobalAuthModuleSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateGlobalAuthModuleRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security CreateGlobalAuthModuleSecurity
}

type CreateGlobalAuthModuleResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	CreateGlobalAuthModule200ApplicationJSONOneOf *interface{}
}
