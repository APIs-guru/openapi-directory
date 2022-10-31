package operations

import (
"openapi/pkg/models/shared")

type GetNotificationsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetNotificationsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNotificationsRequest struct {
    PathParams GetNotificationsPathParams 
    Security GetNotificationsSecurity 
    
}

type GetNotificationsResponse struct {
    ContentType string 
    NotificationResultDto *shared.NotificationResultDto 
    StatusCode int64 
    
}

