package operations

import (
"openapi/pkg/models/shared")

type GetProjectPathParams struct {
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
    
}

type GetProjectSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetProjectRequest struct {
    PathParams GetProjectPathParams 
    Security GetProjectSecurity 
    
}

type GetProjectResponse struct {
    ContentType string 
    StatusCode int64 
    ProjectDetails *shared.ProjectDetails 
    
}

