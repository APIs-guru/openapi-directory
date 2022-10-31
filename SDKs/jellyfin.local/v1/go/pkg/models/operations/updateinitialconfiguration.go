package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInitialConfigurationRequests struct {
	StartupConfigurationDto  *shared.StartupConfigurationDto `request:"mediaType=application/*+json"`
	StartupConfigurationDto1 *shared.StartupConfigurationDto `request:"mediaType=application/json"`
	StartupConfigurationDto2 *shared.StartupConfigurationDto `request:"mediaType=text/json"`
}

type UpdateInitialConfigurationSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateInitialConfigurationRequest struct {
	Request  UpdateInitialConfigurationRequests
	Security UpdateInitialConfigurationSecurity
}

type UpdateInitialConfigurationResponse struct {
	ContentType string
	StatusCode  int64
}
