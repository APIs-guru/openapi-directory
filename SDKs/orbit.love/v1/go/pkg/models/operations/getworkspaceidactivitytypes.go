package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceIDActivityTypesPathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type GetWorkspaceIDActivityTypesSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspaceIDActivityTypesRequest struct {
	PathParams GetWorkspaceIDActivityTypesPathParams
	Security   GetWorkspaceIDActivityTypesSecurity
}

type GetWorkspaceIDActivityTypesResponse struct {
	ContentType string
	StatusCode  int64
}
