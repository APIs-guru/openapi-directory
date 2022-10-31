package operations

import (
	"openapi/pkg/models/shared"
)

type GetPluginConfigurationPathParams struct {
	PluginID string `pathParam:"style=simple,explode=false,name=pluginId"`
}

type GetPluginConfigurationSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetPluginConfigurationRequest struct {
	PathParams GetPluginConfigurationPathParams
	Security   GetPluginConfigurationSecurity
}

type GetPluginConfigurationResponse struct {
	BasePluginConfiguration map[string]interface{}
	ContentType             string
	ProblemDetails          map[string]interface{}
	StatusCode              int64
}
