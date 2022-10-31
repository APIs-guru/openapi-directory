package operations

import (
"openapi/pkg/models/shared")

type GetIssuePathParams struct {
    AlertKey string `pathParam:"style=simple,explode=false,name=alert-key"`
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
    
}

type GetIssueSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetIssueRequest struct {
    PathParams GetIssuePathParams 
    Security GetIssueSecurity 
    
}

type GetIssueResponse struct {
    ContentType string 
    StatusCode int64 
    GetIssue200ApplicationSarifPlusJSONObject map[string]interface{} 
    
}

