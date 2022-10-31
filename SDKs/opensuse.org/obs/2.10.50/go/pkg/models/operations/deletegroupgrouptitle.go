package operations

import (
"openapi/pkg/models/shared")

type DeleteGroupGroupTitlePathParams struct {
    GroupTitle string `pathParam:"style=simple,explode=false,name=group_title"`
    
}

type DeleteGroupGroupTitleSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteGroupGroupTitleRequest struct {
    PathParams DeleteGroupGroupTitlePathParams 
    Security DeleteGroupGroupTitleSecurity 
    
}

type DeleteGroupGroupTitleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

