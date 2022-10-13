package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublishedProjectNamePathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
}

type GetPublishedProjectNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetPublishedProjectNameRequest struct {
	PathParams GetPublishedProjectNamePathParams
	Security   GetPublishedProjectNameSecurity
}

type GetPublishedProjectNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
