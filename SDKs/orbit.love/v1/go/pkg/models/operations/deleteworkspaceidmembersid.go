package operations

import (
"openapi/pkg/models/shared")

type DeleteWorkspaceIDMembersIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type DeleteWorkspaceIDMembersIDSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteWorkspaceIDMembersIDRequest struct {
    PathParams DeleteWorkspaceIDMembersIDPathParams 
    Security DeleteWorkspaceIDMembersIDSecurity 
    
}

type DeleteWorkspaceIDMembersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

