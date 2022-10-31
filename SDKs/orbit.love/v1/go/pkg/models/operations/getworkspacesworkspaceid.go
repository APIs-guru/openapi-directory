package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesWorkspaceIDPathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type GetWorkspacesWorkspaceIDSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesWorkspaceIDRequest struct {
    PathParams GetWorkspacesWorkspaceIDPathParams 
    Security GetWorkspacesWorkspaceIDSecurity 
    
}

type GetWorkspacesWorkspaceIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

