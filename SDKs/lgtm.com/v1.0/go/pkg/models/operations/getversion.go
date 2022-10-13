package operations

import (
	"openapi/pkg/models/shared"
)

type GetVersionSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetVersionRequest struct {
	Security GetVersionSecurity
}

type GetVersionResponse struct {
	ContentType string
	StatusCode  int64
	Version     *shared.Version
}
