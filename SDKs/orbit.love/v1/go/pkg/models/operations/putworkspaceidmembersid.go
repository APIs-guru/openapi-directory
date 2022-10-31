package operations

import (
"openapi/pkg/models/shared")

type PutWorkspaceIDMembersIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type PutWorkspaceIDMembersIDSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutWorkspaceIDMembersIDRequest struct {
    PathParams PutWorkspaceIDMembersIDPathParams 
    Request *shared.Member `request:"mediaType=application/json"`
    Security PutWorkspaceIDMembersIDSecurity 
    
}

type PutWorkspaceIDMembersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

