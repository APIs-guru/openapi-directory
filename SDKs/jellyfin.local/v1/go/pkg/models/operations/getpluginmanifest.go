package operations

import (
	"openapi/pkg/models/shared"
)

type GetPluginManifestPathParams struct {
	PluginID string `pathParam:"style=simple,explode=false,name=pluginId"`
}

type GetPluginManifestSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetPluginManifestRequest struct {
	PathParams GetPluginManifestPathParams
	Security   GetPluginManifestSecurity
}

type GetPluginManifestResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
