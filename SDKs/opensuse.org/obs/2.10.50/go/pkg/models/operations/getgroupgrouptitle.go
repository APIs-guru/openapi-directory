package operations

import (
"openapi/pkg/models/shared")

type GetGroupGroupTitlePathParams struct {
    GroupTitle string `pathParam:"style=simple,explode=false,name=group_title"`
    
}

type GetGroupGroupTitleSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetGroupGroupTitleRequest struct {
    PathParams GetGroupGroupTitlePathParams 
    Security GetGroupGroupTitleSecurity 
    
}

type GetGroupGroupTitleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

