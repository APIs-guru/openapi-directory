package operations

import (
	"openapi/pkg/models/shared"
)

type PutWorkspaceIDMembersMemberIDActivitiesIDPathParams struct {
	ID          string `pathParam:"style=simple,explode=false,name=id"`
	MemberID    string `pathParam:"style=simple,explode=false,name=member_id"`
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type PutWorkspaceIDMembersMemberIDActivitiesIDSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type PutWorkspaceIDMembersMemberIDActivitiesIDRequest struct {
	PathParams PutWorkspaceIDMembersMemberIDActivitiesIDPathParams
	Request    *shared.Activity `request:"mediaType=application/json"`
	Security   PutWorkspaceIDMembersMemberIDActivitiesIDSecurity
}

type PutWorkspaceIDMembersMemberIDActivitiesIDResponse struct {
	ContentType string
	StatusCode  int64
}
