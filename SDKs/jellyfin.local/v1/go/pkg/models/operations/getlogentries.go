package operations

import (
"time"
"openapi/pkg/models/shared")

type GetLogEntriesQueryParams struct {
    HasUserID *bool `queryParam:"style=form,explode=true,name=hasUserId"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    MinDate *time.Time `queryParam:"style=form,explode=true,name=minDate"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    
}

type GetLogEntriesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLogEntriesRequest struct {
    QueryParams GetLogEntriesQueryParams 
    Security GetLogEntriesSecurity 
    
}

type GetLogEntriesResponse struct {
    ActivityLogEntryQueryResult *shared.ActivityLogEntryQueryResult 
    ContentType string 
    StatusCode int64 
    
}

