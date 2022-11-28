package operations

import (
	"openapi/pkg/models/shared"
)

type GetPluginImagePathParamsInput struct {
	PluginID string         `pathParam:"style=simple,explode=false,name=pluginId"`
	Version  shared.Version `pathParam:"style=simple,explode=false,name=version"`
}

type GetPluginImageSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetPluginImageRequest struct {
	PathParams GetPluginImagePathParamsInput
	Security   GetPluginImageSecurity
}

type GetPluginImageResponse struct {
	ContentType                                string
	GetPluginImage200ImageWildcardBinaryString []byte
	ProblemDetails                             map[string]interface{}
	StatusCode                                 int64
}
