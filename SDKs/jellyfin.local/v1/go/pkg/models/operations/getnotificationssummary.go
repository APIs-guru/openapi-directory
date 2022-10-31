package operations

import (
"openapi/pkg/models/shared")

type GetNotificationsSummaryPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetNotificationsSummarySecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNotificationsSummaryRequest struct {
    PathParams GetNotificationsSummaryPathParams 
    Security GetNotificationsSummarySecurity 
    
}

type GetNotificationsSummaryResponse struct {
    ContentType string 
    NotificationsSummaryDto *shared.NotificationsSummaryDto 
    StatusCode int64 
    
}

