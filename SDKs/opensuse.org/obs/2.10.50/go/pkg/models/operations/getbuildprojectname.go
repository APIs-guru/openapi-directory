package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectNamePathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
}

type GetBuildProjectNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectNameRequest struct {
	PathParams GetBuildProjectNamePathParams
	Security   GetBuildProjectNameSecurity
}

type GetBuildProjectNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
