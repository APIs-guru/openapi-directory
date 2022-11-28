package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVlansListQueryParams struct {
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
	Role           *string `queryParam:"style=form,explode=true,name=role"`
	RoleN          *string `queryParam:"style=form,explode=true,name=role__n"`
	RoleID         *string `queryParam:"style=form,explode=true,name=role_id"`
	RoleIDN        *string `queryParam:"style=form,explode=true,name=role_id__n"`
	Site           *string `queryParam:"style=form,explode=true,name=site"`
	SiteN          *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID         *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN        *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Status         *string `queryParam:"style=form,explode=true,name=status"`
	StatusN        *string `queryParam:"style=form,explode=true,name=status__n"`
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
	Vid            *string `queryParam:"style=form,explode=true,name=vid"`
	VidGt          *string `queryParam:"style=form,explode=true,name=vid__gt"`
	VidGte         *string `queryParam:"style=form,explode=true,name=vid__gte"`
	VidLt          *string `queryParam:"style=form,explode=true,name=vid__lt"`
	VidLte         *string `queryParam:"style=form,explode=true,name=vid__lte"`
	VidN           *string `queryParam:"style=form,explode=true,name=vid__n"`
}

type IpamVlansList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Results  []shared.Vlan `json:"results"`
}

type IpamVlansListRequest struct {
	QueryParams IpamVlansListQueryParams
}

type IpamVlansListResponse struct {
	ContentType                           string
	StatusCode                            int64
	IpamVlansList200ApplicationJSONObject *IpamVlansList200ApplicationJSON
}
