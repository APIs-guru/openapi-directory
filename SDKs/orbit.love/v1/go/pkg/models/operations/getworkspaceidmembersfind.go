package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceIDMembersFindPathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type GetWorkspaceIDMembersFindQueryParams struct {
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	Github     *string `queryParam:"style=form,explode=true,name=github"`
	Source     *string `queryParam:"style=form,explode=true,name=source"`
	SourceHost *string `queryParam:"style=form,explode=true,name=source_host"`
	UID        *string `queryParam:"style=form,explode=true,name=uid"`
	Username   *string `queryParam:"style=form,explode=true,name=username"`
}

type GetWorkspaceIDMembersFindSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspaceIDMembersFindRequest struct {
	PathParams  GetWorkspaceIDMembersFindPathParams
	QueryParams GetWorkspaceIDMembersFindQueryParams
	Security    GetWorkspaceIDMembersFindSecurity
}

type GetWorkspaceIDMembersFindResponse struct {
	ContentType string
	StatusCode  int64
}
