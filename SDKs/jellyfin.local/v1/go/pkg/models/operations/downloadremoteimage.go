package operations

import (
"openapi/pkg/models/shared")

type DownloadRemoteImagePathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type DownloadRemoteImageQueryParams struct {
    ImageURL *string `queryParam:"style=form,explode=true,name=imageUrl"`
    Type shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type DownloadRemoteImageSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DownloadRemoteImageRequest struct {
    PathParams DownloadRemoteImagePathParams 
    QueryParams DownloadRemoteImageQueryParams 
    Security DownloadRemoteImageSecurity 
    
}

type DownloadRemoteImageResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

