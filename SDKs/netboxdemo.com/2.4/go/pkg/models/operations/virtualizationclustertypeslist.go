package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClusterTypesListQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Slug *string `queryParam:"style=form,explode=true,name=slug"`
    
}

type VirtualizationClusterTypesListRequest struct {
    QueryParams VirtualizationClusterTypesListQueryParams 
    
}

type VirtualizationClusterTypesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.ClusterType `json:"results"`
    
}

type VirtualizationClusterTypesListResponse struct {
    ContentType string 
    StatusCode int64 
    VirtualizationClusterTypesList200ApplicationJSONObject *VirtualizationClusterTypesList200ApplicationJSON 
    
}

