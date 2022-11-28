package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesListQueryParams struct {
	Contains       *string  `queryParam:"style=form,explode=true,name=contains"`
	Created        *string  `queryParam:"style=form,explode=true,name=created"`
	CreatedGte     *string  `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte     *string  `queryParam:"style=form,explode=true,name=created__lte"`
	Family         *float64 `queryParam:"style=form,explode=true,name=family"`
	ID             *string  `queryParam:"style=form,explode=true,name=id"`
	IDGt           *string  `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte          *string  `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt           *string  `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte          *string  `queryParam:"style=form,explode=true,name=id__lte"`
	IDN            *string  `queryParam:"style=form,explode=true,name=id__n"`
	IsPool         *string  `queryParam:"style=form,explode=true,name=is_pool"`
	LastUpdated    *string  `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte *string  `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte *string  `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit          *int64   `queryParam:"style=form,explode=true,name=limit"`
	MaskLength     *float64 `queryParam:"style=form,explode=true,name=mask_length"`
	Offset         *int64   `queryParam:"style=form,explode=true,name=offset"`
	Prefix         *string  `queryParam:"style=form,explode=true,name=prefix"`
	Q              *string  `queryParam:"style=form,explode=true,name=q"`
	Region         *string  `queryParam:"style=form,explode=true,name=region"`
	RegionN        *string  `queryParam:"style=form,explode=true,name=region__n"`
	RegionID       *string  `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN      *string  `queryParam:"style=form,explode=true,name=region_id__n"`
	Role           *string  `queryParam:"style=form,explode=true,name=role"`
	RoleN          *string  `queryParam:"style=form,explode=true,name=role__n"`
	RoleID         *string  `queryParam:"style=form,explode=true,name=role_id"`
	RoleIDN        *string  `queryParam:"style=form,explode=true,name=role_id__n"`
	Site           *string  `queryParam:"style=form,explode=true,name=site"`
	SiteN          *string  `queryParam:"style=form,explode=true,name=site__n"`
	SiteID         *string  `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN        *string  `queryParam:"style=form,explode=true,name=site_id__n"`
	Status         *string  `queryParam:"style=form,explode=true,name=status"`
	StatusN        *string  `queryParam:"style=form,explode=true,name=status__n"`
	Tag            *string  `queryParam:"style=form,explode=true,name=tag"`
	TagN           *string  `queryParam:"style=form,explode=true,name=tag__n"`
	Tenant         *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantN        *string  `queryParam:"style=form,explode=true,name=tenant__n"`
	TenantGroup    *string  `queryParam:"style=form,explode=true,name=tenant_group"`
	TenantGroupN   *string  `queryParam:"style=form,explode=true,name=tenant_group__n"`
	TenantGroupID  *string  `queryParam:"style=form,explode=true,name=tenant_group_id"`
	TenantGroupIDN *string  `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
	TenantID       *string  `queryParam:"style=form,explode=true,name=tenant_id"`
	TenantIDN      *string  `queryParam:"style=form,explode=true,name=tenant_id__n"`
	VlanID         *string  `queryParam:"style=form,explode=true,name=vlan_id"`
	VlanIDN        *string  `queryParam:"style=form,explode=true,name=vlan_id__n"`
	VlanVid        *float64 `queryParam:"style=form,explode=true,name=vlan_vid"`
	Vrf            *string  `queryParam:"style=form,explode=true,name=vrf"`
	VrfN           *string  `queryParam:"style=form,explode=true,name=vrf__n"`
	VrfID          *string  `queryParam:"style=form,explode=true,name=vrf_id"`
	VrfIDN         *string  `queryParam:"style=form,explode=true,name=vrf_id__n"`
	Within         *string  `queryParam:"style=form,explode=true,name=within"`
	WithinInclude  *string  `queryParam:"style=form,explode=true,name=within_include"`
}

type IpamPrefixesList200ApplicationJSON struct {
	Count    int64           `json:"count"`
	Next     *string         `json:"next,omitempty"`
	Previous *string         `json:"previous,omitempty"`
	Results  []shared.Prefix `json:"results"`
}

type IpamPrefixesListRequest struct {
	QueryParams IpamPrefixesListQueryParams
}

type IpamPrefixesListResponse struct {
	ContentType                              string
	StatusCode                               int64
	IpamPrefixesList200ApplicationJSONObject *IpamPrefixesList200ApplicationJSON
}
