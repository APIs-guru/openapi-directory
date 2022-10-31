package operations

import (
	"openapi/pkg/models/shared"
)

type GetSandboxSandboxIDPathParams struct {
	SandboxID string `pathParam:"style=simple,explode=false,name=sandboxId"`
}

type GetSandboxSandboxIDSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetSandboxSandboxIDRequest struct {
	PathParams GetSandboxSandboxIDPathParams
	Security   GetSandboxSandboxIDSecurity
}

type GetSandboxSandboxIDResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	Sandbox       *shared.Sandbox
	StatusCode    int64
}
