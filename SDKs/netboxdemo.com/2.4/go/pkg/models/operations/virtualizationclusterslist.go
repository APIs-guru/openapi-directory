package operations

import (
"openapi/pkg/models/shared")

type VirtualizationClustersListQueryParams struct {
    Group *string `queryParam:"style=form,explode=true,name=group"`
    GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
    IDIn *string `queryParam:"style=form,explode=true,name=id__in"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Site *string `queryParam:"style=form,explode=true,name=site"`
    SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    TypeID *string `queryParam:"style=form,explode=true,name=type_id"`
    
}

type VirtualizationClustersListRequest struct {
    QueryParams VirtualizationClustersListQueryParams 
    
}

type VirtualizationClustersList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Cluster `json:"results"`
    
}

type VirtualizationClustersListResponse struct {
    ContentType string 
    StatusCode int64 
    VirtualizationClustersList200ApplicationJSONObject *VirtualizationClustersList200ApplicationJSON 
    
}

