package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConfigurationRequestsInput struct {
	ServerConfiguration  *shared.ServerConfigurationInput `request:"mediaType=application/*+json"`
	ServerConfiguration1 *shared.ServerConfigurationInput `request:"mediaType=application/json"`
	ServerConfiguration2 *shared.ServerConfigurationInput `request:"mediaType=text/json"`
}

type UpdateConfigurationSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateConfigurationRequest struct {
	Request  UpdateConfigurationRequestsInput
	Security UpdateConfigurationSecurity
}

type UpdateConfigurationResponse struct {
	ContentType string
	StatusCode  int64
}
