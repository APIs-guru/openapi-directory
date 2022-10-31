package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClusterTypesUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationClusterTypesUpdateRequest struct {
    PathParams VirtualizationClusterTypesUpdatePathParams 
    Request shared.ClusterType `request:"mediaType=application/json"`
    
}

type VirtualizationClusterTypesUpdateResponse struct {
    ClusterType *shared.ClusterType 
    ContentType string 
    StatusCode int64 
    
}

