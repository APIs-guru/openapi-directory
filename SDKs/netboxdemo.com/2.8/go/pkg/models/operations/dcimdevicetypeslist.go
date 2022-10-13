package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceTypesListQueryParams struct {
	ConsolePorts       *string `queryParam:"style=form,explode=true,name=console_ports"`
	ConsoleServerPorts *string `queryParam:"style=form,explode=true,name=console_server_ports"`
	Created            *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte         *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte         *string `queryParam:"style=form,explode=true,name=created__lte"`
	DeviceBays         *string `queryParam:"style=form,explode=true,name=device_bays"`
	ID                 *string `queryParam:"style=form,explode=true,name=id"`
	IDGt               *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte              *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt               *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte              *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN                *string `queryParam:"style=form,explode=true,name=id__n"`
	Interfaces         *string `queryParam:"style=form,explode=true,name=interfaces"`
	IsFullDepth        *string `queryParam:"style=form,explode=true,name=is_full_depth"`
	LastUpdated        *string `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte     *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte     *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit              *int64  `queryParam:"style=form,explode=true,name=limit"`
	Manufacturer       *string `queryParam:"style=form,explode=true,name=manufacturer"`
	ManufacturerN      *string `queryParam:"style=form,explode=true,name=manufacturer__n"`
	ManufacturerID     *string `queryParam:"style=form,explode=true,name=manufacturer_id"`
	ManufacturerIDN    *string `queryParam:"style=form,explode=true,name=manufacturer_id__n"`
	Model              *string `queryParam:"style=form,explode=true,name=model"`
	ModelIc            *string `queryParam:"style=form,explode=true,name=model__ic"`
	ModelIe            *string `queryParam:"style=form,explode=true,name=model__ie"`
	ModelIew           *string `queryParam:"style=form,explode=true,name=model__iew"`
	ModelIsw           *string `queryParam:"style=form,explode=true,name=model__isw"`
	ModelN             *string `queryParam:"style=form,explode=true,name=model__n"`
	ModelNic           *string `queryParam:"style=form,explode=true,name=model__nic"`
	ModelNie           *string `queryParam:"style=form,explode=true,name=model__nie"`
	ModelNiew          *string `queryParam:"style=form,explode=true,name=model__niew"`
	ModelNisw          *string `queryParam:"style=form,explode=true,name=model__nisw"`
	Offset             *int64  `queryParam:"style=form,explode=true,name=offset"`
	PartNumber         *string `queryParam:"style=form,explode=true,name=part_number"`
	PartNumberIc       *string `queryParam:"style=form,explode=true,name=part_number__ic"`
	PartNumberIe       *string `queryParam:"style=form,explode=true,name=part_number__ie"`
	PartNumberIew      *string `queryParam:"style=form,explode=true,name=part_number__iew"`
	PartNumberIsw      *string `queryParam:"style=form,explode=true,name=part_number__isw"`
	PartNumberN        *string `queryParam:"style=form,explode=true,name=part_number__n"`
	PartNumberNic      *string `queryParam:"style=form,explode=true,name=part_number__nic"`
	PartNumberNie      *string `queryParam:"style=form,explode=true,name=part_number__nie"`
	PartNumberNiew     *string `queryParam:"style=form,explode=true,name=part_number__niew"`
	PartNumberNisw     *string `queryParam:"style=form,explode=true,name=part_number__nisw"`
	PassThroughPorts   *string `queryParam:"style=form,explode=true,name=pass_through_ports"`
	PowerOutlets       *string `queryParam:"style=form,explode=true,name=power_outlets"`
	PowerPorts         *string `queryParam:"style=form,explode=true,name=power_ports"`
	Q                  *string `queryParam:"style=form,explode=true,name=q"`
	Slug               *string `queryParam:"style=form,explode=true,name=slug"`
	SlugIc             *string `queryParam:"style=form,explode=true,name=slug__ic"`
	SlugIe             *string `queryParam:"style=form,explode=true,name=slug__ie"`
	SlugIew            *string `queryParam:"style=form,explode=true,name=slug__iew"`
	SlugIsw            *string `queryParam:"style=form,explode=true,name=slug__isw"`
	SlugN              *string `queryParam:"style=form,explode=true,name=slug__n"`
	SlugNic            *string `queryParam:"style=form,explode=true,name=slug__nic"`
	SlugNie            *string `queryParam:"style=form,explode=true,name=slug__nie"`
	SlugNiew           *string `queryParam:"style=form,explode=true,name=slug__niew"`
	SlugNisw           *string `queryParam:"style=form,explode=true,name=slug__nisw"`
	SubdeviceRole      *string `queryParam:"style=form,explode=true,name=subdevice_role"`
	SubdeviceRoleN     *string `queryParam:"style=form,explode=true,name=subdevice_role__n"`
	Tag                *string `queryParam:"style=form,explode=true,name=tag"`
	TagN               *string `queryParam:"style=form,explode=true,name=tag__n"`
	UHeight            *string `queryParam:"style=form,explode=true,name=u_height"`
	UHeightGt          *string `queryParam:"style=form,explode=true,name=u_height__gt"`
	UHeightGte         *string `queryParam:"style=form,explode=true,name=u_height__gte"`
	UHeightLt          *string `queryParam:"style=form,explode=true,name=u_height__lt"`
	UHeightLte         *string `queryParam:"style=form,explode=true,name=u_height__lte"`
	UHeightN           *string `queryParam:"style=form,explode=true,name=u_height__n"`
}

type DcimDeviceTypesListRequest struct {
	QueryParams DcimDeviceTypesListQueryParams
}

type DcimDeviceTypesList200ApplicationJSON struct {
	Count    int64               `json:"count"`
	Next     *string             `json:"next"`
	Previous *string             `json:"previous"`
	Results  []shared.DeviceType `json:"results"`
}

type DcimDeviceTypesListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	DcimDeviceTypesList200ApplicationJSONObject *DcimDeviceTypesList200ApplicationJSON
}
