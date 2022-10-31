package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClusterGroupsListQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Slug *string `queryParam:"style=form,explode=true,name=slug"`
    
}

type VirtualizationClusterGroupsListRequest struct {
    QueryParams VirtualizationClusterGroupsListQueryParams 
    
}

type VirtualizationClusterGroupsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.ClusterGroup `json:"results"`
    
}

type VirtualizationClusterGroupsListResponse struct {
    ContentType string 
    StatusCode int64 
    VirtualizationClusterGroupsList200ApplicationJSONObject *VirtualizationClusterGroupsList200ApplicationJSON 
    
}

