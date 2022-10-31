package operations

import (
"openapi/pkg/models/shared")

type SetUnreadPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type SetUnreadSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SetUnreadRequest struct {
    PathParams SetUnreadPathParams 
    Security SetUnreadSecurity 
    
}

type SetUnreadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

