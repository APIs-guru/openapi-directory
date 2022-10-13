package operations

import (
	"openapi/pkg/models/shared"
)

type GetDefaultDirectoryBrowserSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetDefaultDirectoryBrowserRequest struct {
	Security GetDefaultDirectoryBrowserSecurity
}

type GetDefaultDirectoryBrowserResponse struct {
	ContentType                    string
	DefaultDirectoryBrowserInfoDto *shared.DefaultDirectoryBrowserInfoDto
	StatusCode                     int64
}
