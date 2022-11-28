package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPanelsListQueryParams struct {
	ID           *string `queryParam:"style=form,explode=true,name=id"`
	IDGt         *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte        *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt         *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte        *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN          *string `queryParam:"style=form,explode=true,name=id__n"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
	NameIc       *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe       *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew      *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw      *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN        *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic      *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie      *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew     *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw     *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset       *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q            *string `queryParam:"style=form,explode=true,name=q"`
	RackGroupID  *string `queryParam:"style=form,explode=true,name=rack_group_id"`
	RackGroupIDN *string `queryParam:"style=form,explode=true,name=rack_group_id__n"`
	Region       *string `queryParam:"style=form,explode=true,name=region"`
	RegionN      *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID     *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN    *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Site         *string `queryParam:"style=form,explode=true,name=site"`
	SiteN        *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID       *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN      *string `queryParam:"style=form,explode=true,name=site_id__n"`
}

type DcimPowerPanelsList200ApplicationJSON struct {
	Count    int64               `json:"count"`
	Next     *string             `json:"next,omitempty"`
	Previous *string             `json:"previous,omitempty"`
	Results  []shared.PowerPanel `json:"results"`
}

type DcimPowerPanelsListRequest struct {
	QueryParams DcimPowerPanelsListQueryParams
}

type DcimPowerPanelsListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	DcimPowerPanelsList200ApplicationJSONObject *DcimPowerPanelsList200ApplicationJSON
}
