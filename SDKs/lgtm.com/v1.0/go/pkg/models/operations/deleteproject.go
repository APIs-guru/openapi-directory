package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
}

type DeleteProjectSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteProjectRequest struct {
	PathParams DeleteProjectPathParams
	Security   DeleteProjectSecurity
}

type DeleteProjectResponse struct {
	ContentType    string
	StatusCode     int64
	ProjectDetails *shared.ProjectDetails
}
