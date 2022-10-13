package shared

import (
	"time"
)

type DeviceFaceLabelEnum string

const (
	DeviceFaceLabelEnumFront DeviceFaceLabelEnum = "Front"
	DeviceFaceLabelEnumRear  DeviceFaceLabelEnum = "Rear"
)

type DeviceFaceValueEnum string

const (
	DeviceFaceValueEnumFront DeviceFaceValueEnum = "front"
	DeviceFaceValueEnumRear  DeviceFaceValueEnum = "rear"
)

type DeviceFaceFace struct {
	Label DeviceFaceLabelEnum `json:"label"`
	Value DeviceFaceValueEnum `json:"value"`
}

type DeviceStatusLabelEnum string

const (
	DeviceStatusLabelEnumOffline         DeviceStatusLabelEnum = "Offline"
	DeviceStatusLabelEnumActive          DeviceStatusLabelEnum = "Active"
	DeviceStatusLabelEnumPlanned         DeviceStatusLabelEnum = "Planned"
	DeviceStatusLabelEnumStaged          DeviceStatusLabelEnum = "Staged"
	DeviceStatusLabelEnumFailed          DeviceStatusLabelEnum = "Failed"
	DeviceStatusLabelEnumInventory       DeviceStatusLabelEnum = "Inventory"
	DeviceStatusLabelEnumDecommissioning DeviceStatusLabelEnum = "Decommissioning"
)

type DeviceStatusValueEnum string

const (
	DeviceStatusValueEnumOffline         DeviceStatusValueEnum = "offline"
	DeviceStatusValueEnumActive          DeviceStatusValueEnum = "active"
	DeviceStatusValueEnumPlanned         DeviceStatusValueEnum = "planned"
	DeviceStatusValueEnumStaged          DeviceStatusValueEnum = "staged"
	DeviceStatusValueEnumFailed          DeviceStatusValueEnum = "failed"
	DeviceStatusValueEnumInventory       DeviceStatusValueEnum = "inventory"
	DeviceStatusValueEnumDecommissioning DeviceStatusValueEnum = "decommissioning"
)

type DeviceStatusStatus struct {
	Label DeviceStatusLabelEnum `json:"label"`
	Value DeviceStatusValueEnum `json:"value"`
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
	ParentDevice     *NestedDevice          `json:"parent_device"`
	Platform         *NestedPlatform        `json:"platform"`
	Position         *int64                 `json:"position"`
	PrimaryIP        *NestedIPAddress       `json:"primary_ip"`
	PrimaryIp4       *NestedIPAddress       `json:"primary_ip4"`
	PrimaryIp6       *NestedIPAddress       `json:"primary_ip6"`
	Rack             *NestedRack            `json:"rack"`
	Serial           *string                `json:"serial"`
	Site             NestedSite             `json:"site"`
	Status           *DeviceStatusStatus    `json:"status"`
	Tags             []string               `json:"tags"`
	Tenant           *NestedTenant          `json:"tenant"`
	VcPosition       *int64                 `json:"vc_position"`
	VcPriority       *int64                 `json:"vc_priority"`
	VirtualChassis   *NestedVirtualChassis  `json:"virtual_chassis"`
}
