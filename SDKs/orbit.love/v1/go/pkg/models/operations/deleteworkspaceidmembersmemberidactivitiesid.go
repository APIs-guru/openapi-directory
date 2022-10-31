package operations

import (
"openapi/pkg/models/shared")

type DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteWorkspaceIDMembersMemberIDActivitiesIDRequest struct {
    PathParams DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams 
    Security DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity 
    
}

type DeleteWorkspaceIDMembersMemberIDActivitiesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

