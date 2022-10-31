package operations

import (
"openapi/pkg/models/shared")

type IpamPrefixesListQueryParams struct {
    Contains *string `queryParam:"style=form,explode=true,name=contains"`
    Family *string `queryParam:"style=form,explode=true,name=family"`
    IDIn *string `queryParam:"style=form,explode=true,name=id__in"`
    IsPool *string `queryParam:"style=form,explode=true,name=is_pool"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    MaskLength *float64 `queryParam:"style=form,explode=true,name=mask_length"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Role *string `queryParam:"style=form,explode=true,name=role"`
    RoleID *string `queryParam:"style=form,explode=true,name=role_id"`
    Site *string `queryParam:"style=form,explode=true,name=site"`
    SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
    Status *string `queryParam:"style=form,explode=true,name=status"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    Tenant *string `queryParam:"style=form,explode=true,name=tenant"`
    TenantID *string `queryParam:"style=form,explode=true,name=tenant_id"`
    VlanID *string `queryParam:"style=form,explode=true,name=vlan_id"`
    VlanVid *float64 `queryParam:"style=form,explode=true,name=vlan_vid"`
    Vrf *string `queryParam:"style=form,explode=true,name=vrf"`
    VrfID *string `queryParam:"style=form,explode=true,name=vrf_id"`
    Within *string `queryParam:"style=form,explode=true,name=within"`
    WithinInclude *string `queryParam:"style=form,explode=true,name=within_include"`
    
}

type IpamPrefixesListRequest struct {
    QueryParams IpamPrefixesListQueryParams 
    
}

type IpamPrefixesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.Prefix `json:"results"`
    
}

type IpamPrefixesListResponse struct {
    ContentType string 
    StatusCode int64 
    IpamPrefixesList200ApplicationJSONObject *IpamPrefixesList200ApplicationJSON 
    
}

