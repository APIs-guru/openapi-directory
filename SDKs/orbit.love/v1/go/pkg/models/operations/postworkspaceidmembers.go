package operations

import (
"openapi/pkg/models/shared")

type PostWorkspaceIDMembersPathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type PostWorkspaceIDMembersSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostWorkspaceIDMembersRequest struct {
    PathParams PostWorkspaceIDMembersPathParams 
    Request *shared.MemberAndIdentity `request:"mediaType=application/json"`
    Security PostWorkspaceIDMembersSecurity 
    
}

type PostWorkspaceIDMembersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

