package operations



type DcimPlatformsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPlatformsDeleteRequest struct {
    PathParams DcimPlatformsDeletePathParams 
    
}

type DcimPlatformsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

