package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectConfigPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
}

type GetProjectConfigSourceEnum string

const (
	GetProjectConfigSourceEnumRepository    GetProjectConfigSourceEnum = "repository"
	GetProjectConfigSourceEnumAdministrator GetProjectConfigSourceEnum = "administrator"
)

type GetProjectConfigQueryParams struct {
	Source *GetProjectConfigSourceEnum `queryParam:"style=form,explode=true,name=source"`
}

type GetProjectConfigSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetProjectConfigRequest struct {
	PathParams  GetProjectConfigPathParams
	QueryParams GetProjectConfigQueryParams
	Security    GetProjectConfigSecurity
}

type GetProjectConfigResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	GetProjectConfig400ApplicationJSONObject map[string]interface{}
}
