package operations

import (
	"openapi/pkg/models/shared"
)

type IpamIPAddressesListQueryParams struct {
	Address          *string  `queryParam:"style=form,explode=true,name=address"`
	Device           *string  `queryParam:"style=form,explode=true,name=device"`
	DeviceID         *float64 `queryParam:"style=form,explode=true,name=device_id"`
	Family           *string  `queryParam:"style=form,explode=true,name=family"`
	IDIn             *string  `queryParam:"style=form,explode=true,name=id__in"`
	InterfaceID      *string  `queryParam:"style=form,explode=true,name=interface_id"`
	Limit            *int64   `queryParam:"style=form,explode=true,name=limit"`
	MaskLength       *float64 `queryParam:"style=form,explode=true,name=mask_length"`
	Offset           *int64   `queryParam:"style=form,explode=true,name=offset"`
	Parent           *string  `queryParam:"style=form,explode=true,name=parent"`
	Q                *string  `queryParam:"style=form,explode=true,name=q"`
	Role             *string  `queryParam:"style=form,explode=true,name=role"`
	Status           *string  `queryParam:"style=form,explode=true,name=status"`
	Tag              *string  `queryParam:"style=form,explode=true,name=tag"`
	Tenant           *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantID         *string  `queryParam:"style=form,explode=true,name=tenant_id"`
	VirtualMachine   *string  `queryParam:"style=form,explode=true,name=virtual_machine"`
	VirtualMachineID *string  `queryParam:"style=form,explode=true,name=virtual_machine_id"`
	Vrf              *string  `queryParam:"style=form,explode=true,name=vrf"`
	VrfID            *string  `queryParam:"style=form,explode=true,name=vrf_id"`
}

type IpamIPAddressesListRequest struct {
	QueryParams IpamIPAddressesListQueryParams
}

type IpamIPAddressesList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next"`
	Previous *string            `json:"previous"`
	Results  []shared.IPAddress `json:"results"`
}

type IpamIPAddressesListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	IpamIPAddressesList200ApplicationJSONObject *IpamIPAddressesList200ApplicationJSON
}
