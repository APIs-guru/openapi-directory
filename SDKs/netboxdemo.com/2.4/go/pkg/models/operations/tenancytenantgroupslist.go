package operations

import (
"openapi/pkg/models/shared")

type TenancyTenantGroupsListQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Slug *string `queryParam:"style=form,explode=true,name=slug"`
    
}

type TenancyTenantGroupsListRequest struct {
    QueryParams TenancyTenantGroupsListQueryParams 
    
}

type TenancyTenantGroupsList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.TenantGroup `json:"results"`
    
}

type TenancyTenantGroupsListResponse struct {
    ContentType string 
    StatusCode int64 
    TenancyTenantGroupsList200ApplicationJSONObject *TenancyTenantGroupsList200ApplicationJSON 
    
}

