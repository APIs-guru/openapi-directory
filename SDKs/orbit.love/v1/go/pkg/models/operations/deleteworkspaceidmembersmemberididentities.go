package operations

import (
"openapi/pkg/models/shared")

type DeleteWorkspaceIDMembersMemberIDIdentitiesPathParams struct {
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type DeleteWorkspaceIDMembersMemberIDIdentitiesSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteWorkspaceIDMembersMemberIDIdentitiesRequest struct {
    PathParams DeleteWorkspaceIDMembersMemberIDIdentitiesPathParams 
    Request *shared.Identity `request:"mediaType=application/json"`
    Security DeleteWorkspaceIDMembersMemberIDIdentitiesSecurity 
    
}

type DeleteWorkspaceIDMembersMemberIDIdentitiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

