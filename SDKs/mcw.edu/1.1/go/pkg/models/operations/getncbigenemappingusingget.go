package operations



type GetNcbiGeneMappingUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetNcbiGeneMappingUsingGetRequest struct {
    PathParams GetNcbiGeneMappingUsingGetPathParams 
    
}

type GetNcbiGeneMappingUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

