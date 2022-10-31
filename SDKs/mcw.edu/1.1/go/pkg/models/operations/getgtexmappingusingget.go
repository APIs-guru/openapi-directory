package operations



type GetGtexMappingUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetGtexMappingUsingGetRequest struct {
    PathParams GetGtexMappingUsingGetPathParams 
    
}

type GetGtexMappingUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

