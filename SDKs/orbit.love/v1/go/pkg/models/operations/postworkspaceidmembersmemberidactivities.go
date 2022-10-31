package operations

import (
"openapi/pkg/models/shared")

type PostWorkspaceIDMembersMemberIDActivitiesPathParams struct {
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type PostWorkspaceIDMembersMemberIDActivitiesSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostWorkspaceIDMembersMemberIDActivitiesRequest struct {
    PathParams PostWorkspaceIDMembersMemberIDActivitiesPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    Security PostWorkspaceIDMembersMemberIDActivitiesSecurity 
    
}

type PostWorkspaceIDMembersMemberIDActivitiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

