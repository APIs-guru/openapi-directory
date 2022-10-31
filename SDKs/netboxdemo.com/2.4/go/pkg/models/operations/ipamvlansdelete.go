package operations



type IpamVlansDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamVlansDeleteRequest struct {
    PathParams IpamVlansDeletePathParams 
    
}

type IpamVlansDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

