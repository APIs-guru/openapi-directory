package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConfigurationRequests struct {
	ServerConfiguration  *shared.ServerConfiguration `request:"mediaType=application/*+json"`
	ServerConfiguration1 *shared.ServerConfiguration `request:"mediaType=application/json"`
	ServerConfiguration2 *shared.ServerConfiguration `request:"mediaType=text/json"`
}

type UpdateConfigurationSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateConfigurationRequest struct {
	Request  UpdateConfigurationRequests
	Security UpdateConfigurationSecurity
}

type UpdateConfigurationResponse struct {
	ContentType string
	StatusCode  int64
}
