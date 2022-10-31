package operations

import (
"openapi/pkg/models/shared")

type PutWorkspaceIDMembersMemberIDNotesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type PutWorkspaceIDMembersMemberIDNotesIDSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutWorkspaceIDMembersMemberIDNotesIDRequest struct {
    PathParams PutWorkspaceIDMembersMemberIDNotesIDPathParams 
    Request *shared.Note `request:"mediaType=application/json"`
    Security PutWorkspaceIDMembersMemberIDNotesIDSecurity 
    
}

type PutWorkspaceIDMembersMemberIDNotesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

