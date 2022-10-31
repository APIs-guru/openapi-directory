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

type DeviceFace struct {
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

type DeviceStatus struct {
	Label DeviceStatusLabelEnum `json:"label"`
	Value DeviceStatusValueEnum `json:"value"`
}

type Device struct {
	AssetTag         *string                `json:"asset_tag,omitempty"`
	Cluster          *NestedCluster         `json:"cluster,omitempty"`
	Comments         *string                `json:"comments,omitempty"`
	Created          *time.Time             `json:"created,omitempty"`
	CustomFields     map[string]interface{} `json:"custom_fields,omitempty"`
	DeviceRole       NestedDeviceRole       `json:"device_role"`
	DeviceType       NestedDeviceType       `json:"device_type"`
	DisplayName      *string                `json:"display_name,omitempty"`
	Face             *DeviceFace            `json:"face,omitempty"`
	ID               *int64                 `json:"id,omitempty"`
	LastUpdated      *time.Time             `json:"last_updated,omitempty"`
	LocalContextData *string                `json:"local_context_data,omitempty"`
	Name             *string                `json:"name,omitempty"`
	ParentDevice     *NestedDevice          `json:"parent_device,omitempty"`
	Platform         *NestedPlatform        `json:"platform,omitempty"`
	Position         *int64                 `json:"position,omitempty"`
	PrimaryIP        *NestedIPAddress       `json:"primary_ip,omitempty"`
	PrimaryIp4       *NestedIPAddress       `json:"primary_ip4,omitempty"`
	PrimaryIp6       *NestedIPAddress       `json:"primary_ip6,omitempty"`
	Rack             *NestedRack            `json:"rack,omitempty"`
	Serial           *string                `json:"serial,omitempty"`
	Site             NestedSite             `json:"site"`
	Status           *DeviceStatus          `json:"status,omitempty"`
	Tags             []string               `json:"tags,omitempty"`
	Tenant           *NestedTenant          `json:"tenant,omitempty"`
	VcPosition       *int64                 `json:"vc_position,omitempty"`
	VcPriority       *int64                 `json:"vc_priority,omitempty"`
	VirtualChassis   *NestedVirtualChassis  `json:"virtual_chassis,omitempty"`
}
