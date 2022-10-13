package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateScriptPathParams struct {
	ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
}

type UpdateScriptSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateScriptRequest struct {
	PathParams UpdateScriptPathParams
	Request    *shared.Script `request:"mediaType=application/json"`
	Security   UpdateScriptSecurity
}

type UpdateScriptResponse struct {
	ContentType string
	Script      *shared.Script
	StatusCode  int64
}
