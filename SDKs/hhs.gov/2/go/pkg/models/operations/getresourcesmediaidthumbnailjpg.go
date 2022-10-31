package operations



type GetResourcesMediaIDThumbnailJpgPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesMediaIDThumbnailJpgRequest struct {
    PathParams GetResourcesMediaIDThumbnailJpgPathParams 
    
}

type GetResourcesMediaIDThumbnailJpgResponse struct {
    ContentType string 
    GetResourcesMediaIDThumbnailJpg200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

