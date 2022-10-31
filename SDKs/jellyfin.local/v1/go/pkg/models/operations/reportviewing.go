package operations

import (
"openapi/pkg/models/shared")

type ReportViewingQueryParams struct {
    ItemID string `queryParam:"style=form,explode=true,name=itemId"`
    SessionID *string `queryParam:"style=form,explode=true,name=sessionId"`
    
}

type ReportViewingSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type ReportViewingRequest struct {
    QueryParams ReportViewingQueryParams 
    Security ReportViewingSecurity 
    
}

type ReportViewingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

