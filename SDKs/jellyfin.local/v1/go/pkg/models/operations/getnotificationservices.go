package operations

import (
"openapi/pkg/models/shared")

type GetNotificationServicesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNotificationServicesRequest struct {
    Security GetNotificationServicesSecurity 
    
}

type GetNotificationServicesResponse struct {
    ContentType string 
    NameIDPairs []shared.NameIDPair 
    StatusCode int64 
    
}

