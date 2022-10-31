package operations



type PhotoControllerGetPhotoDownloadPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type PhotoControllerGetPhotoDownloadQueryParams struct {
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    PhotoID string `queryParam:"style=form,explode=true,name=photoID"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type PhotoControllerGetPhotoDownloadRequest struct {
    PathParams PhotoControllerGetPhotoDownloadPathParams 
    QueryParams PhotoControllerGetPhotoDownloadQueryParams 
    
}

type PhotoControllerGetPhotoDownloadResponse struct {
    Body []byte 
    ContentType string 
    Object map[string]interface{} 
    StatusCode int64 
    
}

