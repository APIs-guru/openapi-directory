package operations

import (
	"openapi/pkg/models/shared"
)

type IpamServicesListQueryParams struct {
	Device           *string  `queryParam:"style=form,explode=true,name=device"`
	DeviceID         *string  `queryParam:"style=form,explode=true,name=device_id"`
	Limit            *int64   `queryParam:"style=form,explode=true,name=limit"`
	Name             *string  `queryParam:"style=form,explode=true,name=name"`
	Offset           *int64   `queryParam:"style=form,explode=true,name=offset"`
	Port             *float64 `queryParam:"style=form,explode=true,name=port"`
	Protocol         *string  `queryParam:"style=form,explode=true,name=protocol"`
	Q                *string  `queryParam:"style=form,explode=true,name=q"`
	Tag              *string  `queryParam:"style=form,explode=true,name=tag"`
	VirtualMachine   *string  `queryParam:"style=form,explode=true,name=virtual_machine"`
	VirtualMachineID *string  `queryParam:"style=form,explode=true,name=virtual_machine_id"`
}

type IpamServicesListRequest struct {
	QueryParams IpamServicesListQueryParams
}

type IpamServicesList200ApplicationJSON struct {
	Count    int64            `json:"count"`
	Next     *string          `json:"next"`
	Previous *string          `json:"previous"`
	Results  []shared.Service `json:"results"`
}

type IpamServicesListResponse struct {
	ContentType                              string
	StatusCode                               int64
	IpamServicesList200ApplicationJSONObject *IpamServicesList200ApplicationJSON
}
