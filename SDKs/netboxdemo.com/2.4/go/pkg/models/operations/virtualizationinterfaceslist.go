package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationInterfacesListQueryParams struct {
	Enabled          *string  `queryParam:"style=form,explode=true,name=enabled"`
	Limit            *int64   `queryParam:"style=form,explode=true,name=limit"`
	MacAddress       *string  `queryParam:"style=form,explode=true,name=mac_address"`
	Mtu              *float64 `queryParam:"style=form,explode=true,name=mtu"`
	Name             *string  `queryParam:"style=form,explode=true,name=name"`
	Offset           *int64   `queryParam:"style=form,explode=true,name=offset"`
	VirtualMachine   *string  `queryParam:"style=form,explode=true,name=virtual_machine"`
	VirtualMachineID *string  `queryParam:"style=form,explode=true,name=virtual_machine_id"`
}

type VirtualizationInterfacesList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
	Results  []shared.Interface `json:"results"`
}

type VirtualizationInterfacesListRequest struct {
	QueryParams VirtualizationInterfacesListQueryParams
}

type VirtualizationInterfacesListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	VirtualizationInterfacesList200ApplicationJSONObject *VirtualizationInterfacesList200ApplicationJSON
}
