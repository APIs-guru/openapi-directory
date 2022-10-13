package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerFeedsListQueryParams struct {
	Amperage          *string `queryParam:"style=form,explode=true,name=amperage"`
	AmperageGt        *string `queryParam:"style=form,explode=true,name=amperage__gt"`
	AmperageGte       *string `queryParam:"style=form,explode=true,name=amperage__gte"`
	AmperageLt        *string `queryParam:"style=form,explode=true,name=amperage__lt"`
	AmperageLte       *string `queryParam:"style=form,explode=true,name=amperage__lte"`
	AmperageN         *string `queryParam:"style=form,explode=true,name=amperage__n"`
	Created           *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte        *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte        *string `queryParam:"style=form,explode=true,name=created__lte"`
	ID                *string `queryParam:"style=form,explode=true,name=id"`
	IDGt              *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte             *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt              *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte             *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN               *string `queryParam:"style=form,explode=true,name=id__n"`
	LastUpdated       *string `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte    *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte    *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit             *int64  `queryParam:"style=form,explode=true,name=limit"`
	MaxUtilization    *string `queryParam:"style=form,explode=true,name=max_utilization"`
	MaxUtilizationGt  *string `queryParam:"style=form,explode=true,name=max_utilization__gt"`
	MaxUtilizationGte *string `queryParam:"style=form,explode=true,name=max_utilization__gte"`
	MaxUtilizationLt  *string `queryParam:"style=form,explode=true,name=max_utilization__lt"`
	MaxUtilizationLte *string `queryParam:"style=form,explode=true,name=max_utilization__lte"`
	MaxUtilizationN   *string `queryParam:"style=form,explode=true,name=max_utilization__n"`
	Name              *string `queryParam:"style=form,explode=true,name=name"`
	NameIc            *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe            *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew           *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw           *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN             *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic           *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie           *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew          *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw          *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset            *int64  `queryParam:"style=form,explode=true,name=offset"`
	Phase             *string `queryParam:"style=form,explode=true,name=phase"`
	PhaseN            *string `queryParam:"style=form,explode=true,name=phase__n"`
	PowerPanelID      *string `queryParam:"style=form,explode=true,name=power_panel_id"`
	PowerPanelIDN     *string `queryParam:"style=form,explode=true,name=power_panel_id__n"`
	Q                 *string `queryParam:"style=form,explode=true,name=q"`
	RackID            *string `queryParam:"style=form,explode=true,name=rack_id"`
	RackIDN           *string `queryParam:"style=form,explode=true,name=rack_id__n"`
	Region            *string `queryParam:"style=form,explode=true,name=region"`
	RegionN           *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID          *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN         *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Site              *string `queryParam:"style=form,explode=true,name=site"`
	SiteN             *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID            *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN           *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Status            *string `queryParam:"style=form,explode=true,name=status"`
	StatusN           *string `queryParam:"style=form,explode=true,name=status__n"`
	Supply            *string `queryParam:"style=form,explode=true,name=supply"`
	SupplyN           *string `queryParam:"style=form,explode=true,name=supply__n"`
	Tag               *string `queryParam:"style=form,explode=true,name=tag"`
	TagN              *string `queryParam:"style=form,explode=true,name=tag__n"`
	Type              *string `queryParam:"style=form,explode=true,name=type"`
	TypeN             *string `queryParam:"style=form,explode=true,name=type__n"`
	Voltage           *string `queryParam:"style=form,explode=true,name=voltage"`
	VoltageGt         *string `queryParam:"style=form,explode=true,name=voltage__gt"`
	VoltageGte        *string `queryParam:"style=form,explode=true,name=voltage__gte"`
	VoltageLt         *string `queryParam:"style=form,explode=true,name=voltage__lt"`
	VoltageLte        *string `queryParam:"style=form,explode=true,name=voltage__lte"`
	VoltageN          *string `queryParam:"style=form,explode=true,name=voltage__n"`
}

type DcimPowerFeedsListRequest struct {
	QueryParams DcimPowerFeedsListQueryParams
}

type DcimPowerFeedsList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next"`
	Previous *string            `json:"previous"`
	Results  []shared.PowerFeed `json:"results"`
}

type DcimPowerFeedsListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DcimPowerFeedsList200ApplicationJSONObject *DcimPowerFeedsList200ApplicationJSON
}
