package operations

import (
"openapi/pkg/models/shared")

type RequestAnalysisPathParams struct {
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
    
}

type RequestAnalysisQueryParams struct {
    Commit string `queryParam:"style=form,explode=true,name=commit"`
    Language []string `queryParam:"style=form,explode=true,name=language"`
    
}

type RequestAnalysisSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type RequestAnalysisRequest struct {
    PathParams RequestAnalysisPathParams 
    QueryParams RequestAnalysisQueryParams 
    Security RequestAnalysisSecurity 
    
}

type RequestAnalysisResponse struct {
    ContentType string 
    StatusCode int64 
    Operation *shared.Operation 
    
}

