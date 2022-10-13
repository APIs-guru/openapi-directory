package operations

import (
	"openapi/pkg/models/shared"
)

type PostWorkspaceIDMembersMemberIDIdentitiesPathParams struct {
	MemberID    string `pathParam:"style=simple,explode=false,name=member_id"`
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type PostWorkspaceIDMembersMemberIDIdentitiesSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type PostWorkspaceIDMembersMemberIDIdentitiesRequest struct {
	PathParams PostWorkspaceIDMembersMemberIDIdentitiesPathParams
	Request    *shared.Identity `request:"mediaType=application/json"`
	Security   PostWorkspaceIDMembersMemberIDIdentitiesSecurity
}

type PostWorkspaceIDMembersMemberIDIdentitiesResponse struct {
	ContentType string
	StatusCode  int64
}
