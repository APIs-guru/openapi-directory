package operations



type GetTermAccIdsUsingGetPathParams struct {
    RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
    
}

type GetTermAccIdsUsingGetRequest struct {
    PathParams GetTermAccIdsUsingGetPathParams 
    
}

type GetTermAccIdsUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

