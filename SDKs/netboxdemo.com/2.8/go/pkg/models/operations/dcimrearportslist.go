package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRearPortsListQueryParams struct {
	Cabled          *string `queryParam:"style=form,explode=true,name=cabled"`
	Description     *string `queryParam:"style=form,explode=true,name=description"`
	DescriptionIc   *string `queryParam:"style=form,explode=true,name=description__ic"`
	DescriptionIe   *string `queryParam:"style=form,explode=true,name=description__ie"`
	DescriptionIew  *string `queryParam:"style=form,explode=true,name=description__iew"`
	DescriptionIsw  *string `queryParam:"style=form,explode=true,name=description__isw"`
	DescriptionN    *string `queryParam:"style=form,explode=true,name=description__n"`
	DescriptionNic  *string `queryParam:"style=form,explode=true,name=description__nic"`
	DescriptionNie  *string `queryParam:"style=form,explode=true,name=description__nie"`
	DescriptionNiew *string `queryParam:"style=form,explode=true,name=description__niew"`
	DescriptionNisw *string `queryParam:"style=form,explode=true,name=description__nisw"`
	Device          *string `queryParam:"style=form,explode=true,name=device"`
	DeviceN         *string `queryParam:"style=form,explode=true,name=device__n"`
	DeviceID        *string `queryParam:"style=form,explode=true,name=device_id"`
	DeviceIDN       *string `queryParam:"style=form,explode=true,name=device_id__n"`
	ID              *string `queryParam:"style=form,explode=true,name=id"`
	IDGt            *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte           *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt            *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte           *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN             *string `queryParam:"style=form,explode=true,name=id__n"`
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
	Positions       *string `queryParam:"style=form,explode=true,name=positions"`
	PositionsGt     *string `queryParam:"style=form,explode=true,name=positions__gt"`
	PositionsGte    *string `queryParam:"style=form,explode=true,name=positions__gte"`
	PositionsLt     *string `queryParam:"style=form,explode=true,name=positions__lt"`
	PositionsLte    *string `queryParam:"style=form,explode=true,name=positions__lte"`
	PositionsN      *string `queryParam:"style=form,explode=true,name=positions__n"`
	Q               *string `queryParam:"style=form,explode=true,name=q"`
	Region          *string `queryParam:"style=form,explode=true,name=region"`
	RegionN         *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID        *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN       *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Site            *string `queryParam:"style=form,explode=true,name=site"`
	SiteN           *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID          *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN         *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Tag             *string `queryParam:"style=form,explode=true,name=tag"`
	TagN            *string `queryParam:"style=form,explode=true,name=tag__n"`
	Type            *string `queryParam:"style=form,explode=true,name=type"`
	TypeN           *string `queryParam:"style=form,explode=true,name=type__n"`
}

type DcimRearPortsListRequest struct {
	QueryParams DcimRearPortsListQueryParams
}

type DcimRearPortsList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
	Results  []shared.RearPort `json:"results"`
}

type DcimRearPortsListResponse struct {
	ContentType                               string
	StatusCode                                int64
	DcimRearPortsList200ApplicationJSONObject *DcimRearPortsList200ApplicationJSON
}
