package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClustersReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationClustersReadRequest struct {
    PathParams VirtualizationClustersReadPathParams 
    
}

type VirtualizationClustersReadResponse struct {
    Cluster *shared.Cluster 
    ContentType string 
    StatusCode int64 
    
}

