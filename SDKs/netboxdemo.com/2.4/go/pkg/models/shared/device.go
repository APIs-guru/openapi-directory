package shared

import (
	"time"
)

type DeviceFaceFace struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type DeviceStatusStatus struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Device struct {
	AssetTag         *string                `json:"asset_tag"`
	Cluster          *NestedCluster         `json:"cluster"`
	Comments         *string                `json:"comments"`
	Created          *time.Time             `json:"created"`
	CustomFields     map[string]interface{} `json:"custom_fields"`
	DeviceRole       NestedDeviceRole       `json:"device_role"`
	DeviceType       NestedDeviceType       `json:"device_type"`
	DisplayName      *string                `json:"display_name"`
	Face             *DeviceFaceFace        `json:"face"`
	ID               *int64                 `json:"id"`
	LastUpdated      *time.Time             `json:"last_updated"`
	LocalContextData *string                `json:"local_context_data"`
	Name             *string                `json:"name"`
	ParentDevice     *string                `json:"parent_device"`
	Platform         *NestedPlatform        `json:"platform"`
	Position         *int64                 `json:"position"`
	PrimaryIP        *DeviceIPAddress       `json:"primary_ip"`
	PrimaryIp4       *DeviceIPAddress       `json:"primary_ip4"`
	PrimaryIp6       *DeviceIPAddress       `json:"primary_ip6"`
	Rack             *NestedRack            `json:"rack"`
	Serial           *string                `json:"serial"`
	Site             NestedSite             `json:"site"`
	Status           *DeviceStatusStatus    `json:"status"`
	Tags             []string               `json:"tags"`
	Tenant           *NestedTenant          `json:"tenant"`
	VcPosition       *int64                 `json:"vc_position"`
	VcPriority       *int64                 `json:"vc_priority"`
	VirtualChassis   *DeviceVirtualChassis  `json:"virtual_chassis"`
}
