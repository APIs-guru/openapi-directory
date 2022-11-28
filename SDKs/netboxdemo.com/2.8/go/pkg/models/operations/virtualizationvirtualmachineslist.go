package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationVirtualMachinesListQueryParams struct {
	Cluster          *string `queryParam:"style=form,explode=true,name=cluster"`
	ClusterN         *string `queryParam:"style=form,explode=true,name=cluster__n"`
	ClusterGroup     *string `queryParam:"style=form,explode=true,name=cluster_group"`
	ClusterGroupN    *string `queryParam:"style=form,explode=true,name=cluster_group__n"`
	ClusterGroupID   *string `queryParam:"style=form,explode=true,name=cluster_group_id"`
	ClusterGroupIDN  *string `queryParam:"style=form,explode=true,name=cluster_group_id__n"`
	ClusterID        *string `queryParam:"style=form,explode=true,name=cluster_id"`
	ClusterIDN       *string `queryParam:"style=form,explode=true,name=cluster_id__n"`
	ClusterType      *string `queryParam:"style=form,explode=true,name=cluster_type"`
	ClusterTypeN     *string `queryParam:"style=form,explode=true,name=cluster_type__n"`
	ClusterTypeID    *string `queryParam:"style=form,explode=true,name=cluster_type_id"`
	ClusterTypeIDN   *string `queryParam:"style=form,explode=true,name=cluster_type_id__n"`
	Created          *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte       *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte       *string `queryParam:"style=form,explode=true,name=created__lte"`
	Disk             *string `queryParam:"style=form,explode=true,name=disk"`
	DiskGt           *string `queryParam:"style=form,explode=true,name=disk__gt"`
	DiskGte          *string `queryParam:"style=form,explode=true,name=disk__gte"`
	DiskLt           *string `queryParam:"style=form,explode=true,name=disk__lt"`
	DiskLte          *string `queryParam:"style=form,explode=true,name=disk__lte"`
	DiskN            *string `queryParam:"style=form,explode=true,name=disk__n"`
	ID               *string `queryParam:"style=form,explode=true,name=id"`
	IDGt             *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte            *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt             *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte            *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN              *string `queryParam:"style=form,explode=true,name=id__n"`
	LastUpdated      *string `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte   *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte   *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit            *int64  `queryParam:"style=form,explode=true,name=limit"`
	LocalContextData *string `queryParam:"style=form,explode=true,name=local_context_data"`
	MacAddress       *string `queryParam:"style=form,explode=true,name=mac_address"`
	MacAddressIc     *string `queryParam:"style=form,explode=true,name=mac_address__ic"`
	MacAddressIe     *string `queryParam:"style=form,explode=true,name=mac_address__ie"`
	MacAddressIew    *string `queryParam:"style=form,explode=true,name=mac_address__iew"`
	MacAddressIsw    *string `queryParam:"style=form,explode=true,name=mac_address__isw"`
	MacAddressN      *string `queryParam:"style=form,explode=true,name=mac_address__n"`
	MacAddressNic    *string `queryParam:"style=form,explode=true,name=mac_address__nic"`
	MacAddressNie    *string `queryParam:"style=form,explode=true,name=mac_address__nie"`
	MacAddressNiew   *string `queryParam:"style=form,explode=true,name=mac_address__niew"`
	MacAddressNisw   *string `queryParam:"style=form,explode=true,name=mac_address__nisw"`
	Memory           *string `queryParam:"style=form,explode=true,name=memory"`
	MemoryGt         *string `queryParam:"style=form,explode=true,name=memory__gt"`
	MemoryGte        *string `queryParam:"style=form,explode=true,name=memory__gte"`
	MemoryLt         *string `queryParam:"style=form,explode=true,name=memory__lt"`
	MemoryLte        *string `queryParam:"style=form,explode=true,name=memory__lte"`
	MemoryN          *string `queryParam:"style=form,explode=true,name=memory__n"`
	Name             *string `queryParam:"style=form,explode=true,name=name"`
	NameIc           *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe           *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew          *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw          *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN            *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic          *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie          *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew         *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw         *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset           *int64  `queryParam:"style=form,explode=true,name=offset"`
	Platform         *string `queryParam:"style=form,explode=true,name=platform"`
	PlatformN        *string `queryParam:"style=form,explode=true,name=platform__n"`
	PlatformID       *string `queryParam:"style=form,explode=true,name=platform_id"`
	PlatformIDN      *string `queryParam:"style=form,explode=true,name=platform_id__n"`
	Q                *string `queryParam:"style=form,explode=true,name=q"`
	Region           *string `queryParam:"style=form,explode=true,name=region"`
	RegionN          *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID         *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN        *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Role             *string `queryParam:"style=form,explode=true,name=role"`
	RoleN            *string `queryParam:"style=form,explode=true,name=role__n"`
	RoleID           *string `queryParam:"style=form,explode=true,name=role_id"`
	RoleIDN          *string `queryParam:"style=form,explode=true,name=role_id__n"`
	Site             *string `queryParam:"style=form,explode=true,name=site"`
	SiteN            *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID           *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN          *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Status           *string `queryParam:"style=form,explode=true,name=status"`
	StatusN          *string `queryParam:"style=form,explode=true,name=status__n"`
	Tag              *string `queryParam:"style=form,explode=true,name=tag"`
	TagN             *string `queryParam:"style=form,explode=true,name=tag__n"`
	Tenant           *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantN          *string `queryParam:"style=form,explode=true,name=tenant__n"`
	TenantGroup      *string `queryParam:"style=form,explode=true,name=tenant_group"`
	TenantGroupN     *string `queryParam:"style=form,explode=true,name=tenant_group__n"`
	TenantGroupID    *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
	TenantGroupIDN   *string `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
	TenantID         *string `queryParam:"style=form,explode=true,name=tenant_id"`
	TenantIDN        *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
	Vcpus            *string `queryParam:"style=form,explode=true,name=vcpus"`
	VcpusGt          *string `queryParam:"style=form,explode=true,name=vcpus__gt"`
	VcpusGte         *string `queryParam:"style=form,explode=true,name=vcpus__gte"`
	VcpusLt          *string `queryParam:"style=form,explode=true,name=vcpus__lt"`
	VcpusLte         *string `queryParam:"style=form,explode=true,name=vcpus__lte"`
	VcpusN           *string `queryParam:"style=form,explode=true,name=vcpus__n"`
}

type VirtualizationVirtualMachinesList200ApplicationJSON struct {
	Count    int64                                    `json:"count"`
	Next     *string                                  `json:"next,omitempty"`
	Previous *string                                  `json:"previous,omitempty"`
	Results  []shared.VirtualMachineWithConfigContext `json:"results"`
}

type VirtualizationVirtualMachinesListRequest struct {
	QueryParams VirtualizationVirtualMachinesListQueryParams
}

type VirtualizationVirtualMachinesListResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	VirtualizationVirtualMachinesList200ApplicationJSONObject *VirtualizationVirtualMachinesList200ApplicationJSON
}
