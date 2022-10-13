package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceTypesListQueryParams struct {
	IDIn            *string  `queryParam:"style=form,explode=true,name=id__in"`
	IsConsoleServer *string  `queryParam:"style=form,explode=true,name=is_console_server"`
	IsFullDepth     *string  `queryParam:"style=form,explode=true,name=is_full_depth"`
	IsNetworkDevice *string  `queryParam:"style=form,explode=true,name=is_network_device"`
	IsPdu           *string  `queryParam:"style=form,explode=true,name=is_pdu"`
	Limit           *int64   `queryParam:"style=form,explode=true,name=limit"`
	Manufacturer    *string  `queryParam:"style=form,explode=true,name=manufacturer"`
	ManufacturerID  *string  `queryParam:"style=form,explode=true,name=manufacturer_id"`
	Model           *string  `queryParam:"style=form,explode=true,name=model"`
	Offset          *int64   `queryParam:"style=form,explode=true,name=offset"`
	PartNumber      *string  `queryParam:"style=form,explode=true,name=part_number"`
	Q               *string  `queryParam:"style=form,explode=true,name=q"`
	Slug            *string  `queryParam:"style=form,explode=true,name=slug"`
	SubdeviceRole   *string  `queryParam:"style=form,explode=true,name=subdevice_role"`
	Tag             *string  `queryParam:"style=form,explode=true,name=tag"`
	UHeight         *float64 `queryParam:"style=form,explode=true,name=u_height"`
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
