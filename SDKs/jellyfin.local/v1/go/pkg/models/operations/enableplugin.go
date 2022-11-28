package operations

import (
	"openapi/pkg/models/shared"
)

type EnablePluginPathParamsInput struct {
	PluginID string         `pathParam:"style=simple,explode=false,name=pluginId"`
	Version  shared.Version `pathParam:"style=simple,explode=false,name=version"`
}

type EnablePluginSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type EnablePluginRequest struct {
	PathParams EnablePluginPathParamsInput
	Security   EnablePluginSecurity
}

type EnablePluginResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
