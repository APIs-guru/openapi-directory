package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfacesListQueryParams struct {
	Cabled            *string `queryParam:"style=form,explode=true,name=cabled"`
	ConnectionStatus  *string `queryParam:"style=form,explode=true,name=connection_status"`
	ConnectionStatusN *string `queryParam:"style=form,explode=true,name=connection_status__n"`
	Description       *string `queryParam:"style=form,explode=true,name=description"`
	DescriptionIc     *string `queryParam:"style=form,explode=true,name=description__ic"`
	DescriptionIe     *string `queryParam:"style=form,explode=true,name=description__ie"`
	DescriptionIew    *string `queryParam:"style=form,explode=true,name=description__iew"`
	DescriptionIsw    *string `queryParam:"style=form,explode=true,name=description__isw"`
	DescriptionN      *string `queryParam:"style=form,explode=true,name=description__n"`
	DescriptionNic    *string `queryParam:"style=form,explode=true,name=description__nic"`
	DescriptionNie    *string `queryParam:"style=form,explode=true,name=description__nie"`
	DescriptionNiew   *string `queryParam:"style=form,explode=true,name=description__niew"`
	DescriptionNisw   *string `queryParam:"style=form,explode=true,name=description__nisw"`
	Device            *string `queryParam:"style=form,explode=true,name=device"`
	DeviceID          *string `queryParam:"style=form,explode=true,name=device_id"`
	Enabled           *string `queryParam:"style=form,explode=true,name=enabled"`
	ID                *string `queryParam:"style=form,explode=true,name=id"`
	IDGt              *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte             *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt              *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte             *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN               *string `queryParam:"style=form,explode=true,name=id__n"`
	Kind              *string `queryParam:"style=form,explode=true,name=kind"`
	LagID             *string `queryParam:"style=form,explode=true,name=lag_id"`
	LagIDN            *string `queryParam:"style=form,explode=true,name=lag_id__n"`
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
	MgmtOnly          *string `queryParam:"style=form,explode=true,name=mgmt_only"`
	Mode              *string `queryParam:"style=form,explode=true,name=mode"`
	ModeN             *string `queryParam:"style=form,explode=true,name=mode__n"`
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
	Region            *string `queryParam:"style=form,explode=true,name=region"`
	RegionN           *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID          *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN         *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Site              *string `queryParam:"style=form,explode=true,name=site"`
	SiteN             *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID            *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN           *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Tag               *string `queryParam:"style=form,explode=true,name=tag"`
	TagN              *string `queryParam:"style=form,explode=true,name=tag__n"`
	Type              *string `queryParam:"style=form,explode=true,name=type"`
	TypeN             *string `queryParam:"style=form,explode=true,name=type__n"`
	Vlan              *string `queryParam:"style=form,explode=true,name=vlan"`
	VlanID            *string `queryParam:"style=form,explode=true,name=vlan_id"`
}

type DcimInterfacesList200ApplicationJSON struct {
	Count    int64                    `json:"count"`
	Next     *string                  `json:"next,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Results  []shared.DeviceInterface `json:"results"`
}

type DcimInterfacesListRequest struct {
	QueryParams DcimInterfacesListQueryParams
}

type DcimInterfacesListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DcimInterfacesList200ApplicationJSONObject *DcimInterfacesList200ApplicationJSON
}
