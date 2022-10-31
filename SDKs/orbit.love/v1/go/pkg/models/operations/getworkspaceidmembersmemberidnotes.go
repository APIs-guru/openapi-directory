package operations

import (
"openapi/pkg/models/shared")

type GetWorkspaceIDMembersMemberIDNotesPathParams struct {
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type GetWorkspaceIDMembersMemberIDNotesQueryParams struct {
    Page *string `queryParam:"style=form,explode=true,name=page"`
    
}

type GetWorkspaceIDMembersMemberIDNotesSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspaceIDMembersMemberIDNotesRequest struct {
    PathParams GetWorkspaceIDMembersMemberIDNotesPathParams 
    QueryParams GetWorkspaceIDMembersMemberIDNotesQueryParams 
    Security GetWorkspaceIDMembersMemberIDNotesSecurity 
    
}

type GetWorkspaceIDMembersMemberIDNotesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

