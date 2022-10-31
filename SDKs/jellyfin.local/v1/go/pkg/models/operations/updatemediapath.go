package operations

import (
"openapi/pkg/models/shared")

type UpdateMediaPathQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type UpdateMediaPathRequests struct {
    MediaPathInfo *shared.MediaPathInfo `request:"mediaType=application/*+json"`
    MediaPathInfo1 *shared.MediaPathInfo `request:"mediaType=application/json"`
    MediaPathInfo2 *shared.MediaPathInfo `request:"mediaType=text/json"`
    
}

type UpdateMediaPathSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateMediaPathRequest struct {
    QueryParams UpdateMediaPathQueryParams 
    Request *UpdateMediaPathRequests 
    Security UpdateMediaPathSecurity 
    
}

type UpdateMediaPathResponse struct {
    ContentType string 
    StatusCode int64 
    
}

