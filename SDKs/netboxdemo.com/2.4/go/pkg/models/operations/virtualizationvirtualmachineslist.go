package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationVirtualMachinesListQueryParams struct {
	Cluster        *string  `queryParam:"style=form,explode=true,name=cluster"`
	ClusterGroup   *string  `queryParam:"style=form,explode=true,name=cluster_group"`
	ClusterGroupID *string  `queryParam:"style=form,explode=true,name=cluster_group_id"`
	ClusterID      *string  `queryParam:"style=form,explode=true,name=cluster_id"`
	ClusterType    *string  `queryParam:"style=form,explode=true,name=cluster_type"`
	ClusterTypeID  *string  `queryParam:"style=form,explode=true,name=cluster_type_id"`
	IDIn           *string  `queryParam:"style=form,explode=true,name=id__in"`
	Limit          *int64   `queryParam:"style=form,explode=true,name=limit"`
	Name           *string  `queryParam:"style=form,explode=true,name=name"`
	Offset         *int64   `queryParam:"style=form,explode=true,name=offset"`
	Platform       *string  `queryParam:"style=form,explode=true,name=platform"`
	PlatformID     *string  `queryParam:"style=form,explode=true,name=platform_id"`
	Q              *string  `queryParam:"style=form,explode=true,name=q"`
	Region         *string  `queryParam:"style=form,explode=true,name=region"`
	RegionID       *float64 `queryParam:"style=form,explode=true,name=region_id"`
	Role           *string  `queryParam:"style=form,explode=true,name=role"`
	RoleID         *string  `queryParam:"style=form,explode=true,name=role_id"`
	Site           *string  `queryParam:"style=form,explode=true,name=site"`
	SiteID         *string  `queryParam:"style=form,explode=true,name=site_id"`
	Status         *string  `queryParam:"style=form,explode=true,name=status"`
	Tag            *string  `queryParam:"style=form,explode=true,name=tag"`
	Tenant         *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantID       *string  `queryParam:"style=form,explode=true,name=tenant_id"`
}

type VirtualizationVirtualMachinesListRequest struct {
	QueryParams VirtualizationVirtualMachinesListQueryParams
}

type VirtualizationVirtualMachinesList200ApplicationJSON struct {
	Count    int64                   `json:"count"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Results  []shared.VirtualMachine `json:"results"`
}

type VirtualizationVirtualMachinesListResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	VirtualizationVirtualMachinesList200ApplicationJSONObject *VirtualizationVirtualMachinesList200ApplicationJSON
}
