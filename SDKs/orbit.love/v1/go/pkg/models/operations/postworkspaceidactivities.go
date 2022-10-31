package operations

import (
"openapi/pkg/models/shared")

type PostWorkspaceIDActivitiesPathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type PostWorkspaceIDActivitiesSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostWorkspaceIDActivitiesRequest struct {
    PathParams PostWorkspaceIDActivitiesPathParams 
    Request *shared.ActivityAndIdentity `request:"mediaType=application/json"`
    Security PostWorkspaceIDActivitiesSecurity 
    
}

type PostWorkspaceIDActivitiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

