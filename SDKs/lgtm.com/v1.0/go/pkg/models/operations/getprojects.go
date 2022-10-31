package operations

import (
"openapi/pkg/models/shared")

type GetProjectsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Start *string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetProjectsSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetProjectsRequest struct {
    QueryParams GetProjectsQueryParams 
    Security GetProjectsSecurity 
    
}

type GetProjectsResponse struct {
    ContentType string 
    StatusCode int64 
    ProjectList *shared.ProjectList 
    
}

