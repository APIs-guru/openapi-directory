package operations

import (
	"openapi/pkg/models/shared"
)

type CompileScriptSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CompileScriptRequest struct {
	Request  *shared.Script `request:"mediaType=application/json"`
	Security CompileScriptSecurity
}

type CompileScriptResponse struct {
	ContentType             string
	ScriptCompilationResult *shared.ScriptCompilationResult
	StatusCode              int64
}
