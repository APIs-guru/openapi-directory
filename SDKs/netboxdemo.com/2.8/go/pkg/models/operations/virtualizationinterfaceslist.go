package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationInterfacesListQueryParams struct {
	Enabled           *string `queryParam:"style=form,explode=true,name=enabled"`
	ID                *string `queryParam:"style=form,explode=true,name=id"`
	IDGt              *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte             *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt              *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte             *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN               *string `queryParam:"style=form,explode=true,name=id__n"`
	Limit             *int64  `queryParam:"style=form,explode=true,name=limit"`
	MacAddress        *string `queryParam:"style=form,explode=true,name=mac_address"`
	MacAddressIc      *string `queryParam:"style=form,explode=true,name=mac_address__ic"`
	MacAddressIe      *string `queryParam:"style=form,explode=true,name=mac_address__ie"`
	MacAddressIew     *string `queryParam:"style=form,explode=true,name=mac_address__iew"`
	MacAddressIsw     *string `queryParam:"style=form,explode=true,name=mac_address__isw"`
	MacAddressN       *string `queryParam:"style=form,explode=true,name=mac_address__n"`
	MacAddressNic     *string `queryParam:"style=form,explode=true,name=mac_address__nic"`
	MacAddressNie     *string `queryParam:"style=form,explode=true,name=mac_address__nie"`
	MacAddressNiew    *string `queryParam:"style=form,explode=true,name=mac_address__niew"`
	MacAddressNisw    *string `queryParam:"style=form,explode=true,name=mac_address__nisw"`
	Mtu               *string `queryParam:"style=form,explode=true,name=mtu"`
	MtuGt             *string `queryParam:"style=form,explode=true,name=mtu__gt"`
	MtuGte            *string `queryParam:"style=form,explode=true,name=mtu__gte"`
	MtuLt             *string `queryParam:"style=form,explode=true,name=mtu__lt"`
	MtuLte            *string `queryParam:"style=form,explode=true,name=mtu__lte"`
	MtuN              *string `queryParam:"style=form,explode=true,name=mtu__n"`
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
	Q                 *string `queryParam:"style=form,explode=true,name=q"`
	VirtualMachine    *string `queryParam:"style=form,explode=true,name=virtual_machine"`
	VirtualMachineN   *string `queryParam:"style=form,explode=true,name=virtual_machine__n"`
	VirtualMachineID  *string `queryParam:"style=form,explode=true,name=virtual_machine_id"`
	VirtualMachineIDN *string `queryParam:"style=form,explode=true,name=virtual_machine_id__n"`
}

type VirtualizationInterfacesList200ApplicationJSON struct {
	Count    int64                            `json:"count"`
	Next     *string                          `json:"next,omitempty"`
	Previous *string                          `json:"previous,omitempty"`
	Results  []shared.VirtualMachineInterface `json:"results"`
}

type VirtualizationInterfacesListRequest struct {
	QueryParams VirtualizationInterfacesListQueryParams
}

type VirtualizationInterfacesListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	VirtualizationInterfacesList200ApplicationJSONObject *VirtualizationInterfacesList200ApplicationJSON
}
