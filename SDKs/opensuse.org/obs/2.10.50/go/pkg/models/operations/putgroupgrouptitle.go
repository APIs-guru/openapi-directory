package operations

import (
"openapi/pkg/models/shared")

type PutGroupGroupTitlePathParams struct {
    GroupTitle string `pathParam:"style=simple,explode=false,name=group_title"`
    
}

type PutGroupGroupTitleSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PutGroupGroupTitleRequest struct {
    PathParams PutGroupGroupTitlePathParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PutGroupGroupTitleSecurity 
    
}

type PutGroupGroupTitleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

