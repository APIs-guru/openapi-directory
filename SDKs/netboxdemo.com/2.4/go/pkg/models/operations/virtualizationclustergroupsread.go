package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClusterGroupsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationClusterGroupsReadRequest struct {
    PathParams VirtualizationClusterGroupsReadPathParams 
    
}

type VirtualizationClusterGroupsReadResponse struct {
    ClusterGroup *shared.ClusterGroup 
    ContentType string 
    StatusCode int64 
    
}

