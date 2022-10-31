package operations



type GetAnnotationsByRgdIDUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetAnnotationsByRgdIDUsingGetRequest struct {
    PathParams GetAnnotationsByRgdIDUsingGetPathParams 
    
}

type GetAnnotationsByRgdIDUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

