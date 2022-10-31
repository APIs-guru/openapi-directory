package operations



type GetGeneByRgdIDUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetGeneByRgdIDUsingGetRequest struct {
    PathParams GetGeneByRgdIDUsingGetPathParams 
    
}

type GetGeneByRgdIDUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

