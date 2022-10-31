package operations

import (
"openapi/pkg/models/shared")

type SetItemImagePathParams struct {
    ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type SetItemImageSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SetItemImageRequest struct {
    PathParams SetItemImagePathParams 
    Security SetItemImageSecurity 
    
}

type SetItemImageResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

