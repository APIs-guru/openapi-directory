package operations

import (
"openapi/pkg/models/shared")

type GetRatingImagesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRatingImagesRequest struct {
    Security GetRatingImagesSecurity 
    
}

type GetRatingImagesResponse struct {
    ContentType string 
    ImageByNameInfos []shared.ImageByNameInfo 
    StatusCode int64 
    
}

