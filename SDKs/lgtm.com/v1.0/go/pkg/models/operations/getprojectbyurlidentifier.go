package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectByURLIdentifierPathParams struct {
	Name     string `pathParam:"style=simple,explode=false,name=name"`
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
}

type GetProjectByURLIdentifierSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetProjectByURLIdentifierRequest struct {
	PathParams GetProjectByURLIdentifierPathParams
	Security   GetProjectByURLIdentifierSecurity
}

type GetProjectByURLIdentifierResponse struct {
	ContentType    string
	StatusCode     int64
	ProjectDetails *shared.ProjectDetails
}
