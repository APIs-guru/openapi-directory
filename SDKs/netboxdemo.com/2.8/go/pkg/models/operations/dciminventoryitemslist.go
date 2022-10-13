package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInventoryItemsListQueryParams struct {
	AssetTag        *string `queryParam:"style=form,explode=true,name=asset_tag"`
	AssetTagIc      *string `queryParam:"style=form,explode=true,name=asset_tag__ic"`
	AssetTagIe      *string `queryParam:"style=form,explode=true,name=asset_tag__ie"`
	AssetTagIew     *string `queryParam:"style=form,explode=true,name=asset_tag__iew"`
	AssetTagIsw     *string `queryParam:"style=form,explode=true,name=asset_tag__isw"`
	AssetTagN       *string `queryParam:"style=form,explode=true,name=asset_tag__n"`
	AssetTagNic     *string `queryParam:"style=form,explode=true,name=asset_tag__nic"`
	AssetTagNie     *string `queryParam:"style=form,explode=true,name=asset_tag__nie"`
	AssetTagNiew    *string `queryParam:"style=form,explode=true,name=asset_tag__niew"`
	AssetTagNisw    *string `queryParam:"style=form,explode=true,name=asset_tag__nisw"`
	Device          *string `queryParam:"style=form,explode=true,name=device"`
	DeviceN         *string `queryParam:"style=form,explode=true,name=device__n"`
	DeviceID        *string `queryParam:"style=form,explode=true,name=device_id"`
	DeviceIDN       *string `queryParam:"style=form,explode=true,name=device_id__n"`
	Discovered      *string `queryParam:"style=form,explode=true,name=discovered"`
	ID              *string `queryParam:"style=form,explode=true,name=id"`
	IDGt            *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte           *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt            *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte           *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN             *string `queryParam:"style=form,explode=true,name=id__n"`
	Limit           *int64  `queryParam:"style=form,explode=true,name=limit"`
	Manufacturer    *string `queryParam:"style=form,explode=true,name=manufacturer"`
	ManufacturerN   *string `queryParam:"style=form,explode=true,name=manufacturer__n"`
	ManufacturerID  *string `queryParam:"style=form,explode=true,name=manufacturer_id"`
	ManufacturerIDN *string `queryParam:"style=form,explode=true,name=manufacturer_id__n"`
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
	ParentID        *string `queryParam:"style=form,explode=true,name=parent_id"`
	ParentIDN       *string `queryParam:"style=form,explode=true,name=parent_id__n"`
	PartID          *string `queryParam:"style=form,explode=true,name=part_id"`
	PartIDIc        *string `queryParam:"style=form,explode=true,name=part_id__ic"`
	PartIDIe        *string `queryParam:"style=form,explode=true,name=part_id__ie"`
	PartIDIew       *string `queryParam:"style=form,explode=true,name=part_id__iew"`
	PartIDIsw       *string `queryParam:"style=form,explode=true,name=part_id__isw"`
	PartIDN         *string `queryParam:"style=form,explode=true,name=part_id__n"`
	PartIDNic       *string `queryParam:"style=form,explode=true,name=part_id__nic"`
	PartIDNie       *string `queryParam:"style=form,explode=true,name=part_id__nie"`
	PartIDNiew      *string `queryParam:"style=form,explode=true,name=part_id__niew"`
	PartIDNisw      *string `queryParam:"style=form,explode=true,name=part_id__nisw"`
	Q               *string `queryParam:"style=form,explode=true,name=q"`
	Region          *string `queryParam:"style=form,explode=true,name=region"`
	RegionN         *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID        *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN       *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Serial          *string `queryParam:"style=form,explode=true,name=serial"`
	Site            *string `queryParam:"style=form,explode=true,name=site"`
	SiteN           *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID          *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN         *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Tag             *string `queryParam:"style=form,explode=true,name=tag"`
	TagN            *string `queryParam:"style=form,explode=true,name=tag__n"`
}

type DcimInventoryItemsListRequest struct {
	QueryParams DcimInventoryItemsListQueryParams
}

type DcimInventoryItemsList200ApplicationJSON struct {
	Count    int64                  `json:"count"`
	Next     *string                `json:"next"`
	Previous *string                `json:"previous"`
	Results  []shared.InventoryItem `json:"results"`
}

type DcimInventoryItemsListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DcimInventoryItemsList200ApplicationJSONObject *DcimInventoryItemsList200ApplicationJSON
}
