package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSandboxSandboxIDPathParams struct {
	SandboxID string `pathParam:"style=simple,explode=false,name=sandboxId"`
}

type DeleteSandboxSandboxIDSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteSandboxSandboxIDRequest struct {
	PathParams DeleteSandboxSandboxIDPathParams
	Security   DeleteSandboxSandboxIDSecurity
}

type DeleteSandboxSandboxIDResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
