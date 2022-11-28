package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClustersListQueryParams struct {
	Created        *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte     *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte     *string `queryParam:"style=form,explode=true,name=created__lte"`
	Group          *string `queryParam:"style=form,explode=true,name=group"`
	GroupN         *string `queryParam:"style=form,explode=true,name=group__n"`
	GroupID        *string `queryParam:"style=form,explode=true,name=group_id"`
	GroupIDN       *string `queryParam:"style=form,explode=true,name=group_id__n"`
	ID             *string `queryParam:"style=form,explode=true,name=id"`
	IDGt           *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte          *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt           *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte          *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN            *string `queryParam:"style=form,explode=true,name=id__n"`
	LastUpdated    *string `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit          *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name           *string `queryParam:"style=form,explode=true,name=name"`
	NameIc         *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe         *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew        *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw        *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN          *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic        *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie        *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew       *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw       *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset         *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q              *string `queryParam:"style=form,explode=true,name=q"`
	Region         *string `queryParam:"style=form,explode=true,name=region"`
	RegionN        *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID       *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN      *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Site           *string `queryParam:"style=form,explode=true,name=site"`
	SiteN          *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID         *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN        *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Tag            *string `queryParam:"style=form,explode=true,name=tag"`
	TagN           *string `queryParam:"style=form,explode=true,name=tag__n"`
	Tenant         *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantN        *string `queryParam:"style=form,explode=true,name=tenant__n"`
	TenantGroup    *string `queryParam:"style=form,explode=true,name=tenant_group"`
	TenantGroupN   *string `queryParam:"style=form,explode=true,name=tenant_group__n"`
	TenantGroupID  *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
	TenantGroupIDN *string `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
	TenantID       *string `queryParam:"style=form,explode=true,name=tenant_id"`
	TenantIDN      *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
	Type           *string `queryParam:"style=form,explode=true,name=type"`
	TypeN          *string `queryParam:"style=form,explode=true,name=type__n"`
	TypeID         *string `queryParam:"style=form,explode=true,name=type_id"`
	TypeIDN        *string `queryParam:"style=form,explode=true,name=type_id__n"`
}

type VirtualizationClustersList200ApplicationJSON struct {
	Count    int64            `json:"count"`
	Next     *string          `json:"next,omitempty"`
	Previous *string          `json:"previous,omitempty"`
	Results  []shared.Cluster `json:"results"`
}

type VirtualizationClustersListRequest struct {
	QueryParams VirtualizationClustersListQueryParams
}

type VirtualizationClustersListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	VirtualizationClustersList200ApplicationJSONObject *VirtualizationClustersList200ApplicationJSON
}
