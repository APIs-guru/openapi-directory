package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesListQueryParams struct {
	AssetTag         *string  `queryParam:"style=form,explode=true,name=asset_tag"`
	ClusterID        *string  `queryParam:"style=form,explode=true,name=cluster_id"`
	DeviceTypeID     *string  `queryParam:"style=form,explode=true,name=device_type_id"`
	HasPrimaryIP     *string  `queryParam:"style=form,explode=true,name=has_primary_ip"`
	IDIn             *string  `queryParam:"style=form,explode=true,name=id__in"`
	IsConsoleServer  *string  `queryParam:"style=form,explode=true,name=is_console_server"`
	IsFullDepth      *string  `queryParam:"style=form,explode=true,name=is_full_depth"`
	IsNetworkDevice  *string  `queryParam:"style=form,explode=true,name=is_network_device"`
	IsPdu            *string  `queryParam:"style=form,explode=true,name=is_pdu"`
	Limit            *int64   `queryParam:"style=form,explode=true,name=limit"`
	MacAddress       *string  `queryParam:"style=form,explode=true,name=mac_address"`
	Manufacturer     *string  `queryParam:"style=form,explode=true,name=manufacturer"`
	ManufacturerID   *string  `queryParam:"style=form,explode=true,name=manufacturer_id"`
	Model            *string  `queryParam:"style=form,explode=true,name=model"`
	Name             *string  `queryParam:"style=form,explode=true,name=name"`
	Offset           *int64   `queryParam:"style=form,explode=true,name=offset"`
	Platform         *string  `queryParam:"style=form,explode=true,name=platform"`
	PlatformID       *string  `queryParam:"style=form,explode=true,name=platform_id"`
	Position         *float64 `queryParam:"style=form,explode=true,name=position"`
	Q                *string  `queryParam:"style=form,explode=true,name=q"`
	RackGroupID      *string  `queryParam:"style=form,explode=true,name=rack_group_id"`
	RackID           *string  `queryParam:"style=form,explode=true,name=rack_id"`
	Region           *string  `queryParam:"style=form,explode=true,name=region"`
	RegionID         *float64 `queryParam:"style=form,explode=true,name=region_id"`
	Role             *string  `queryParam:"style=form,explode=true,name=role"`
	RoleID           *string  `queryParam:"style=form,explode=true,name=role_id"`
	Serial           *string  `queryParam:"style=form,explode=true,name=serial"`
	Site             *string  `queryParam:"style=form,explode=true,name=site"`
	SiteID           *string  `queryParam:"style=form,explode=true,name=site_id"`
	Status           *string  `queryParam:"style=form,explode=true,name=status"`
	Tag              *string  `queryParam:"style=form,explode=true,name=tag"`
	Tenant           *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantID         *string  `queryParam:"style=form,explode=true,name=tenant_id"`
	VirtualChassisID *string  `queryParam:"style=form,explode=true,name=virtual_chassis_id"`
}

type DcimDevicesListRequest struct {
	QueryParams DcimDevicesListQueryParams
}

type DcimDevicesList200ApplicationJSON struct {
	Count    int64           `json:"count"`
	Next     *string         `json:"next,omitempty"`
	Previous *string         `json:"previous,omitempty"`
	Results  []shared.Device `json:"results"`
}

type DcimDevicesListResponse struct {
	ContentType                             string
	StatusCode                              int64
	DcimDevicesList200ApplicationJSONObject *DcimDevicesList200ApplicationJSON
}
