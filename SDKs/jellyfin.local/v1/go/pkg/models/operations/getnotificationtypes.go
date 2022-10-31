package operations

import (
"openapi/pkg/models/shared")

type GetNotificationTypesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNotificationTypesRequest struct {
    Security GetNotificationTypesSecurity 
    
}

type GetNotificationTypesResponse struct {
    ContentType string 
    NotificationTypeInfos []shared.NotificationTypeInfo 
    StatusCode int64 
    
}

