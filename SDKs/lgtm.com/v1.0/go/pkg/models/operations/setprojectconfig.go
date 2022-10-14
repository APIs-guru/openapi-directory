package operations

import (
	"openapi/pkg/models/shared"
)

type SetProjectConfigPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
}

type SetProjectConfigSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type SetProjectConfigRequest struct {
	PathParams SetProjectConfigPathParams
	Request    string `request:"mediaType=application/x-yaml"`
	Security   SetProjectConfigSecurity
}

type SetProjectConfigResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
