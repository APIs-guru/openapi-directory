package operations



type GetUniProtMappingUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetUniProtMappingUsingGetRequest struct {
    PathParams GetUniProtMappingUsingGetPathParams 
    
}

type GetUniProtMappingUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

