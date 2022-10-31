package operations



type GetAnnotationsByAccIDAndRgdIDUsingGetPathParams struct {
    AccID string `pathParam:"style=simple,explode=false,name=accId"`
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetAnnotationsByAccIDAndRgdIDUsingGetRequest struct {
    PathParams GetAnnotationsByAccIDAndRgdIDUsingGetPathParams 
    
}

type GetAnnotationsByAccIDAndRgdIDUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

