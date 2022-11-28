package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfacesListQueryParams struct {
	Device     *string  `queryParam:"style=form,explode=true,name=device"`
	DeviceID   *float64 `queryParam:"style=form,explode=true,name=device_id"`
	Enabled    *string  `queryParam:"style=form,explode=true,name=enabled"`
	FormFactor *string  `queryParam:"style=form,explode=true,name=form_factor"`
	LagID      *string  `queryParam:"style=form,explode=true,name=lag_id"`
	Limit      *int64   `queryParam:"style=form,explode=true,name=limit"`
	MacAddress *string  `queryParam:"style=form,explode=true,name=mac_address"`
	MgmtOnly   *string  `queryParam:"style=form,explode=true,name=mgmt_only"`
	Mtu        *float64 `queryParam:"style=form,explode=true,name=mtu"`
	Name       *string  `queryParam:"style=form,explode=true,name=name"`
	Offset     *int64   `queryParam:"style=form,explode=true,name=offset"`
	Tag        *string  `queryParam:"style=form,explode=true,name=tag"`
	Type       *string  `queryParam:"style=form,explode=true,name=type"`
	Vlan       *string  `queryParam:"style=form,explode=true,name=vlan"`
	VlanID     *string  `queryParam:"style=form,explode=true,name=vlan_id"`
}

type DcimInterfacesList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
	Results  []shared.Interface `json:"results"`
}

type DcimInterfacesListRequest struct {
	QueryParams DcimInterfacesListQueryParams
}

type DcimInterfacesListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DcimInterfacesList200ApplicationJSONObject *DcimInterfacesList200ApplicationJSON
}
