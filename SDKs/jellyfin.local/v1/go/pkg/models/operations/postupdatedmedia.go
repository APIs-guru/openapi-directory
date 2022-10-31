package operations

import (
"openapi/pkg/models/shared")

type PostUpdatedMediaRequests struct {
    MediaUpdateInfoDtos []shared.MediaUpdateInfoDto `request:"mediaType=application/*+json"`
    MediaUpdateInfoDtos1 []shared.MediaUpdateInfoDto `request:"mediaType=application/json"`
    MediaUpdateInfoDtos2 []shared.MediaUpdateInfoDto `request:"mediaType=text/json"`
    
}

type PostUpdatedMediaSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostUpdatedMediaRequest struct {
    Request PostUpdatedMediaRequests 
    Security PostUpdatedMediaSecurity 
    
}

type PostUpdatedMediaResponse struct {
    ContentType string 
    StatusCode int64 
    
}

