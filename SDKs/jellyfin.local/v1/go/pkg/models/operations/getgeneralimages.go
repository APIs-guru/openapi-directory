package operations

import (
"openapi/pkg/models/shared")

type GetGeneralImagesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetGeneralImagesRequest struct {
    Security GetGeneralImagesSecurity 
    
}

type GetGeneralImagesResponse struct {
    ContentType string 
    ImageByNameInfos []shared.ImageByNameInfo 
    StatusCode int64 
    
}

