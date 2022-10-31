package operations



type IpamRirsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamRirsDeleteRequest struct {
    PathParams IpamRirsDeletePathParams 
    
}

type IpamRirsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

