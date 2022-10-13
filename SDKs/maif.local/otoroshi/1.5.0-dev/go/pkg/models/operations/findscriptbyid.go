package operations

import (
	"openapi/pkg/models/shared"
)

type FindScriptByIDPathParams struct {
	ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
}

type FindScriptByIDSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type FindScriptByIDRequest struct {
	PathParams FindScriptByIDPathParams
	Security   FindScriptByIDSecurity
}

type FindScriptByIDResponse struct {
	ContentType string
	Script      *shared.Script
	StatusCode  int64
}
