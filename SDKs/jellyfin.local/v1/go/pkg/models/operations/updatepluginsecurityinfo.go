package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePluginSecurityInfoRequests struct {
	PluginSecurityInfo  *shared.PluginSecurityInfo `request:"mediaType=application/*+json"`
	PluginSecurityInfo1 *shared.PluginSecurityInfo `request:"mediaType=application/json"`
	PluginSecurityInfo2 *shared.PluginSecurityInfo `request:"mediaType=text/json"`
}

type UpdatePluginSecurityInfoSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdatePluginSecurityInfoRequest struct {
	Request  UpdatePluginSecurityInfoRequests
	Security UpdatePluginSecurityInfoSecurity
}

type UpdatePluginSecurityInfoResponse struct {
	ContentType string
	StatusCode  int64
}
