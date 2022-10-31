package operations

import (
	"openapi/pkg/models/shared"
)

type FindGlobalAuthModuleByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FindGlobalAuthModuleByIDSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type FindGlobalAuthModuleByIDRequest struct {
	PathParams FindGlobalAuthModuleByIDPathParams
	Security   FindGlobalAuthModuleByIDSecurity
}

type FindGlobalAuthModuleByIDResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	FindGlobalAuthModuleByID200ApplicationJSONOneOf *interface{}
}
