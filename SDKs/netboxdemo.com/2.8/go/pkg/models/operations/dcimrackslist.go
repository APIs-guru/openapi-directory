package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRacksListQueryParams struct {
	AssetTag       *string `queryParam:"style=form,explode=true,name=asset_tag"`
	AssetTagIc     *string `queryParam:"style=form,explode=true,name=asset_tag__ic"`
	AssetTagIe     *string `queryParam:"style=form,explode=true,name=asset_tag__ie"`
	AssetTagIew    *string `queryParam:"style=form,explode=true,name=asset_tag__iew"`
	AssetTagIsw    *string `queryParam:"style=form,explode=true,name=asset_tag__isw"`
	AssetTagN      *string `queryParam:"style=form,explode=true,name=asset_tag__n"`
	AssetTagNic    *string `queryParam:"style=form,explode=true,name=asset_tag__nic"`
	AssetTagNie    *string `queryParam:"style=form,explode=true,name=asset_tag__nie"`
	AssetTagNiew   *string `queryParam:"style=form,explode=true,name=asset_tag__niew"`
	AssetTagNisw   *string `queryParam:"style=form,explode=true,name=asset_tag__nisw"`
	Created        *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte     *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte     *string `queryParam:"style=form,explode=true,name=created__lte"`
	DescUnits      *string `queryParam:"style=form,explode=true,name=desc_units"`
	FacilityID     *string `queryParam:"style=form,explode=true,name=facility_id"`
	FacilityIDIc   *string `queryParam:"style=form,explode=true,name=facility_id__ic"`
	FacilityIDIe   *string `queryParam:"style=form,explode=true,name=facility_id__ie"`
	FacilityIDIew  *string `queryParam:"style=form,explode=true,name=facility_id__iew"`
	FacilityIDIsw  *string `queryParam:"style=form,explode=true,name=facility_id__isw"`
	FacilityIDN    *string `queryParam:"style=form,explode=true,name=facility_id__n"`
	FacilityIDNic  *string `queryParam:"style=form,explode=true,name=facility_id__nic"`
	FacilityIDNie  *string `queryParam:"style=form,explode=true,name=facility_id__nie"`
	FacilityIDNiew *string `queryParam:"style=form,explode=true,name=facility_id__niew"`
	FacilityIDNisw *string `queryParam:"style=form,explode=true,name=facility_id__nisw"`
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
	OuterDepth     *string `queryParam:"style=form,explode=true,name=outer_depth"`
	OuterDepthGt   *string `queryParam:"style=form,explode=true,name=outer_depth__gt"`
	OuterDepthGte  *string `queryParam:"style=form,explode=true,name=outer_depth__gte"`
	OuterDepthLt   *string `queryParam:"style=form,explode=true,name=outer_depth__lt"`
	OuterDepthLte  *string `queryParam:"style=form,explode=true,name=outer_depth__lte"`
	OuterDepthN    *string `queryParam:"style=form,explode=true,name=outer_depth__n"`
	OuterUnit      *string `queryParam:"style=form,explode=true,name=outer_unit"`
	OuterUnitN     *string `queryParam:"style=form,explode=true,name=outer_unit__n"`
	OuterWidth     *string `queryParam:"style=form,explode=true,name=outer_width"`
	OuterWidthGt   *string `queryParam:"style=form,explode=true,name=outer_width__gt"`
	OuterWidthGte  *string `queryParam:"style=form,explode=true,name=outer_width__gte"`
	OuterWidthLt   *string `queryParam:"style=form,explode=true,name=outer_width__lt"`
	OuterWidthLte  *string `queryParam:"style=form,explode=true,name=outer_width__lte"`
	OuterWidthN    *string `queryParam:"style=form,explode=true,name=outer_width__n"`
	Q              *string `queryParam:"style=form,explode=true,name=q"`
	Region         *string `queryParam:"style=form,explode=true,name=region"`
	RegionN        *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID       *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN      *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Role           *string `queryParam:"style=form,explode=true,name=role"`
	RoleN          *string `queryParam:"style=form,explode=true,name=role__n"`
	RoleID         *string `queryParam:"style=form,explode=true,name=role_id"`
	RoleIDN        *string `queryParam:"style=form,explode=true,name=role_id__n"`
	Serial         *string `queryParam:"style=form,explode=true,name=serial"`
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
	Type           *string `queryParam:"style=form,explode=true,name=type"`
	TypeN          *string `queryParam:"style=form,explode=true,name=type__n"`
	UHeight        *string `queryParam:"style=form,explode=true,name=u_height"`
	UHeightGt      *string `queryParam:"style=form,explode=true,name=u_height__gt"`
	UHeightGte     *string `queryParam:"style=form,explode=true,name=u_height__gte"`
	UHeightLt      *string `queryParam:"style=form,explode=true,name=u_height__lt"`
	UHeightLte     *string `queryParam:"style=form,explode=true,name=u_height__lte"`
	UHeightN       *string `queryParam:"style=form,explode=true,name=u_height__n"`
	Width          *string `queryParam:"style=form,explode=true,name=width"`
	WidthN         *string `queryParam:"style=form,explode=true,name=width__n"`
}

type DcimRacksListRequest struct {
	QueryParams DcimRacksListQueryParams
}

type DcimRacksList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next"`
	Previous *string       `json:"previous"`
	Results  []shared.Rack `json:"results"`
}

type DcimRacksListResponse struct {
	ContentType                           string
	StatusCode                            int64
	DcimRacksList200ApplicationJSONObject *DcimRacksList200ApplicationJSON
}
