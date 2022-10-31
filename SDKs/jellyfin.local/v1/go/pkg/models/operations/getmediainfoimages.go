package operations

import (
"openapi/pkg/models/shared")

type GetMediaInfoImagesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetMediaInfoImagesRequest struct {
    Security GetMediaInfoImagesSecurity 
    
}

type GetMediaInfoImagesResponse struct {
    ContentType string 
    ImageByNameInfos []shared.ImageByNameInfo 
    StatusCode int64 
    
}

