package operations

import (
"openapi/pkg/models/shared")

type DeleteUserImagePathParams struct {
    ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type DeleteUserImageQueryParams struct {
    Index *int32 `queryParam:"style=form,explode=true,name=index"`
    
}

type DeleteUserImageSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteUserImageRequest struct {
    PathParams DeleteUserImagePathParams 
    QueryParams DeleteUserImageQueryParams 
    Security DeleteUserImageSecurity 
    
}

type DeleteUserImageResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

