package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClusterGroupsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationClusterGroupsPartialUpdateRequest struct {
    PathParams VirtualizationClusterGroupsPartialUpdatePathParams 
    Request shared.ClusterGroup `request:"mediaType=application/json"`
    
}

type VirtualizationClusterGroupsPartialUpdateResponse struct {
    ClusterGroup *shared.ClusterGroup 
    ContentType string 
    StatusCode int64 
    
}

