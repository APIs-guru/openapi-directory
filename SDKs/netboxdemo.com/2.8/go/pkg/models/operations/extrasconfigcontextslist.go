package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasConfigContextsListQueryParams struct {
	ClusterGroup    *string `queryParam:"style=form,explode=true,name=cluster_group"`
	ClusterGroupN   *string `queryParam:"style=form,explode=true,name=cluster_group__n"`
	ClusterGroupID  *string `queryParam:"style=form,explode=true,name=cluster_group_id"`
	ClusterGroupIDN *string `queryParam:"style=form,explode=true,name=cluster_group_id__n"`
	ClusterID       *string `queryParam:"style=form,explode=true,name=cluster_id"`
	ClusterIDN      *string `queryParam:"style=form,explode=true,name=cluster_id__n"`
	ID              *string `queryParam:"style=form,explode=true,name=id"`
	IDGt            *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte           *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt            *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte           *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN             *string `queryParam:"style=form,explode=true,name=id__n"`
	IsActive        *string `queryParam:"style=form,explode=true,name=is_active"`
	Limit           *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name            *string `queryParam:"style=form,explode=true,name=name"`
	NameIc          *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe          *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew         *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw         *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN           *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic         *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie         *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew        *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw        *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset          *int64  `queryParam:"style=form,explode=true,name=offset"`
	Platform        *string `queryParam:"style=form,explode=true,name=platform"`
	PlatformN       *string `queryParam:"style=form,explode=true,name=platform__n"`
	PlatformID      *string `queryParam:"style=form,explode=true,name=platform_id"`
	PlatformIDN     *string `queryParam:"style=form,explode=true,name=platform_id__n"`
	Q               *string `queryParam:"style=form,explode=true,name=q"`
	Region          *string `queryParam:"style=form,explode=true,name=region"`
	RegionN         *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID        *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN       *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Role            *string `queryParam:"style=form,explode=true,name=role"`
	RoleN           *string `queryParam:"style=form,explode=true,name=role__n"`
	RoleID          *string `queryParam:"style=form,explode=true,name=role_id"`
	RoleIDN         *string `queryParam:"style=form,explode=true,name=role_id__n"`
	Site            *string `queryParam:"style=form,explode=true,name=site"`
	SiteN           *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID          *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN         *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Tag             *string `queryParam:"style=form,explode=true,name=tag"`
	TagN            *string `queryParam:"style=form,explode=true,name=tag__n"`
	Tenant          *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantN         *string `queryParam:"style=form,explode=true,name=tenant__n"`
	TenantGroup     *string `queryParam:"style=form,explode=true,name=tenant_group"`
	TenantGroupN    *string `queryParam:"style=form,explode=true,name=tenant_group__n"`
	TenantGroupID   *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
	TenantGroupIDN  *string `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
	TenantID        *string `queryParam:"style=form,explode=true,name=tenant_id"`
	TenantIDN       *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
}

type ExtrasConfigContextsListRequest struct {
	QueryParams ExtrasConfigContextsListQueryParams
}

type ExtrasConfigContextsList200ApplicationJSON struct {
	Count    int64                  `json:"count"`
	Next     *string                `json:"next,omitempty"`
	Previous *string                `json:"previous,omitempty"`
	Results  []shared.ConfigContext `json:"results"`
}

type ExtrasConfigContextsListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ExtrasConfigContextsList200ApplicationJSONObject *ExtrasConfigContextsList200ApplicationJSON
}
