package operations

import (
	"openapi/pkg/models/shared"
)

type UninstallPluginByVersionPathParamsInput struct {
	PluginID string         `pathParam:"style=simple,explode=false,name=pluginId"`
	Version  shared.Version `pathParam:"style=simple,explode=false,name=version"`
}

type UninstallPluginByVersionSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UninstallPluginByVersionRequest struct {
	PathParams UninstallPluginByVersionPathParamsInput
	Security   UninstallPluginByVersionSecurity
}

type UninstallPluginByVersionResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
