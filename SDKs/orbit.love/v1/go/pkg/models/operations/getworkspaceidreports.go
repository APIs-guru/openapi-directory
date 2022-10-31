package operations

import (
"openapi/pkg/models/shared")

type GetWorkspaceIDReportsPathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type GetWorkspaceIDReportsQueryParams struct {
    ActivityType *string `queryParam:"style=form,explode=true,name=activity_type"`
    EndDate *string `queryParam:"style=form,explode=true,name=end_date"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    StartDate *string `queryParam:"style=form,explode=true,name=start_date"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type GetWorkspaceIDReportsSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspaceIDReportsRequest struct {
    PathParams GetWorkspaceIDReportsPathParams 
    QueryParams GetWorkspaceIDReportsQueryParams 
    Security GetWorkspaceIDReportsSecurity 
    
}

type GetWorkspaceIDReportsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

