package operations



type GetQtlByRgdIDUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetQtlByRgdIDUsingGetRequest struct {
    PathParams GetQtlByRgdIDUsingGetPathParams 
    
}

type GetQtlByRgdIDUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

