package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkspaceIDMembersMemberIDNotesPathParams struct {
	MemberID    string `pathParam:"style=simple,explode=false,name=member_id"`
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type PostWorkspaceIDMembersMemberIDNotesSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type PostWorkspaceIDMembersMemberIDNotesRequest struct {
	PathParams PostWorkspaceIDMembersMemberIDNotesPathParams
	Request    *shared.Note `request:"mediaType=application/json"`
	Security   PostWorkspaceIDMembersMemberIDNotesSecurity
}

type PostWorkspaceIDMembersMemberIDNotesResponse struct {
	ContentType string
	StatusCode  int64
}
