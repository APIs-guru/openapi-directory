package operations



type IpamAggregatesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamAggregatesDeleteRequest struct {
    PathParams IpamAggregatesDeletePathParams 
    
}

type IpamAggregatesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

