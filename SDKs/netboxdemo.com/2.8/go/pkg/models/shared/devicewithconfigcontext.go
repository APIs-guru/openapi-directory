package shared

import (
	"time"
)

type DeviceWithConfigContextFaceLabelEnum string

const (
	DeviceWithConfigContextFaceLabelEnumFront DeviceWithConfigContextFaceLabelEnum = "Front"
	DeviceWithConfigContextFaceLabelEnumRear  DeviceWithConfigContextFaceLabelEnum = "Rear"
)

type DeviceWithConfigContextFaceValueEnum string

const (
	DeviceWithConfigContextFaceValueEnumFront DeviceWithConfigContextFaceValueEnum = "front"
	DeviceWithConfigContextFaceValueEnumRear  DeviceWithConfigContextFaceValueEnum = "rear"
)

type DeviceWithConfigContextFaceFace struct {
	Label DeviceWithConfigContextFaceLabelEnum `json:"label"`
	Value DeviceWithConfigContextFaceValueEnum `json:"value"`
}

type DeviceWithConfigContextStatusLabelEnum string

const (
	DeviceWithConfigContextStatusLabelEnumOffline         DeviceWithConfigContextStatusLabelEnum = "Offline"
	DeviceWithConfigContextStatusLabelEnumActive          DeviceWithConfigContextStatusLabelEnum = "Active"
	DeviceWithConfigContextStatusLabelEnumPlanned         DeviceWithConfigContextStatusLabelEnum = "Planned"
	DeviceWithConfigContextStatusLabelEnumStaged          DeviceWithConfigContextStatusLabelEnum = "Staged"
	DeviceWithConfigContextStatusLabelEnumFailed          DeviceWithConfigContextStatusLabelEnum = "Failed"
	DeviceWithConfigContextStatusLabelEnumInventory       DeviceWithConfigContextStatusLabelEnum = "Inventory"
	DeviceWithConfigContextStatusLabelEnumDecommissioning DeviceWithConfigContextStatusLabelEnum = "Decommissioning"
)

type DeviceWithConfigContextStatusValueEnum string

const (
	DeviceWithConfigContextStatusValueEnumOffline         DeviceWithConfigContextStatusValueEnum = "offline"
	DeviceWithConfigContextStatusValueEnumActive          DeviceWithConfigContextStatusValueEnum = "active"
	DeviceWithConfigContextStatusValueEnumPlanned         DeviceWithConfigContextStatusValueEnum = "planned"
	DeviceWithConfigContextStatusValueEnumStaged          DeviceWithConfigContextStatusValueEnum = "staged"
	DeviceWithConfigContextStatusValueEnumFailed          DeviceWithConfigContextStatusValueEnum = "failed"
	DeviceWithConfigContextStatusValueEnumInventory       DeviceWithConfigContextStatusValueEnum = "inventory"
	DeviceWithConfigContextStatusValueEnumDecommissioning DeviceWithConfigContextStatusValueEnum = "decommissioning"
)

type DeviceWithConfigContextStatusStatus struct {
	Label DeviceWithConfigContextStatusLabelEnum `json:"label"`
	Value DeviceWithConfigContextStatusValueEnum `json:"value"`
}

type DeviceWithConfigContext struct {
	AssetTag         *string                              `json:"asset_tag"`
	Cluster          *NestedCluster                       `json:"cluster"`
	Comments         *string                              `json:"comments"`
	ConfigContext    map[string]string                    `json:"config_context"`
	Created          *time.Time                           `json:"created"`
	CustomFields     map[string]interface{}               `json:"custom_fields"`
	DeviceRole       NestedDeviceRole                     `json:"device_role"`
	DeviceType       NestedDeviceType                     `json:"device_type"`
	DisplayName      *string                              `json:"display_name"`
	Face             *DeviceWithConfigContextFaceFace     `json:"face"`
	ID               *int64                               `json:"id"`
	LastUpdated      *time.Time                           `json:"last_updated"`
	LocalContextData *string                              `json:"local_context_data"`
	Name             *string                              `json:"name"`
	ParentDevice     *NestedDevice                        `json:"parent_device"`
	Platform         *NestedPlatform                      `json:"platform"`
	Position         *int64                               `json:"position"`
	PrimaryIP        *NestedIPAddress                     `json:"primary_ip"`
	PrimaryIp4       *NestedIPAddress                     `json:"primary_ip4"`
	PrimaryIp6       *NestedIPAddress                     `json:"primary_ip6"`
	Rack             *NestedRack                          `json:"rack"`
	Serial           *string                              `json:"serial"`
	Site             NestedSite                           `json:"site"`
	Status           *DeviceWithConfigContextStatusStatus `json:"status"`
	Tags             []string                             `json:"tags"`
	Tenant           *NestedTenant                        `json:"tenant"`
	VcPosition       *int64                               `json:"vc_position"`
	VcPriority       *int64                               `json:"vc_priority"`
	VirtualChassis   *NestedVirtualChassis                `json:"virtual_chassis"`
}
