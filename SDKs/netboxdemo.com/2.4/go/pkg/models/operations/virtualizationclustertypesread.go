package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClusterTypesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationClusterTypesReadRequest struct {
    PathParams VirtualizationClusterTypesReadPathParams 
    
}

type VirtualizationClusterTypesReadResponse struct {
    ClusterType *shared.ClusterType 
    ContentType string 
    StatusCode int64 
    
}

