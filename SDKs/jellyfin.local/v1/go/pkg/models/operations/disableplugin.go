package operations

import (
	"openapi/pkg/models/shared"
)

type DisablePluginPathParamsInput struct {
	PluginID string         `pathParam:"style=simple,explode=false,name=pluginId"`
	Version  shared.Version `pathParam:"style=simple,explode=false,name=version"`
}

type DisablePluginSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DisablePluginRequest struct {
	PathParams DisablePluginPathParamsInput
	Security   DisablePluginSecurity
}

type DisablePluginResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
