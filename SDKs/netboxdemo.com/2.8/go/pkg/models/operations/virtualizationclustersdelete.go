package operations



type VirtualizationClustersDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationClustersDeleteRequest struct {
    PathParams VirtualizationClustersDeletePathParams 
    
}

type VirtualizationClustersDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

