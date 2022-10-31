package operations



type GetGeneOrthologsUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetGeneOrthologsUsingGetRequest struct {
    PathParams GetGeneOrthologsUsingGetPathParams 
    
}

type GetGeneOrthologsUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

