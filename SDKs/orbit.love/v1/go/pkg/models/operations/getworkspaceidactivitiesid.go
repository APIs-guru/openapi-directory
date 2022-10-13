package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceIDActivitiesIDPathParams struct {
	ID          string `pathParam:"style=simple,explode=false,name=id"`
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type GetWorkspaceIDActivitiesIDSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspaceIDActivitiesIDRequest struct {
	PathParams GetWorkspaceIDActivitiesIDPathParams
	Security   GetWorkspaceIDActivitiesIDSecurity
}

type GetWorkspaceIDActivitiesIDResponse struct {
	ContentType string
	StatusCode  int64
}
