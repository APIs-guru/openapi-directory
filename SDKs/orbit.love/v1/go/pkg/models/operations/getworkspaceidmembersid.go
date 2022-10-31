package operations

import (
"openapi/pkg/models/shared")

type GetWorkspaceIDMembersIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type GetWorkspaceIDMembersIDSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspaceIDMembersIDRequest struct {
    PathParams GetWorkspaceIDMembersIDPathParams 
    Security GetWorkspaceIDMembersIDSecurity 
    
}

type GetWorkspaceIDMembersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

