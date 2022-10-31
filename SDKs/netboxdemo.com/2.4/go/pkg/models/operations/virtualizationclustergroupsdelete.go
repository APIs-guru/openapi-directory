package operations



type VirtualizationClusterGroupsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationClusterGroupsDeleteRequest struct {
    PathParams VirtualizationClusterGroupsDeletePathParams 
    
}

type VirtualizationClusterGroupsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

