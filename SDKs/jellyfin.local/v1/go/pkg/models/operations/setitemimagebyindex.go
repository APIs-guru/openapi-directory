package operations

import (
"openapi/pkg/models/shared")

type SetItemImageByIndexPathParams struct {
    ImageIndex int32 `pathParam:"style=simple,explode=false,name=imageIndex"`
    ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type SetItemImageByIndexSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SetItemImageByIndexRequest struct {
    PathParams SetItemImageByIndexPathParams 
    Security SetItemImageByIndexSecurity 
    
}

type SetItemImageByIndexResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

