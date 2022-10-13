package operations

import (
	"openapi/pkg/models/shared"
)

type PostSandboxRequests struct {
	SandboxRequest  *shared.SandboxRequest `request:"mediaType=application/json"`
	SandboxRequest1 *shared.SandboxRequest `request:"mediaType=application/json"`
}

type PostSandboxSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type PostSandboxRequest struct {
	Request  *PostSandboxRequests
	Security PostSandboxSecurity
}

type PostSandboxResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	Sandbox       *shared.Sandbox
	StatusCode    int64
}
