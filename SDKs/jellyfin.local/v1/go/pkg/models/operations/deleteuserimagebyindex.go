package operations

import (
"openapi/pkg/models/shared")

type DeleteUserImageByIndexPathParams struct {
    ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    Index int32 `pathParam:"style=simple,explode=false,name=index"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type DeleteUserImageByIndexSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteUserImageByIndexRequest struct {
    PathParams DeleteUserImageByIndexPathParams 
    Security DeleteUserImageByIndexSecurity 
    
}

type DeleteUserImageByIndexResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

