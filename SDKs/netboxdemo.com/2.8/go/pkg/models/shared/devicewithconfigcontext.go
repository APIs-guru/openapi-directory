package shared

import (
"time")


type DeviceWithConfigContextFaceLabelEnum string

const (
    DeviceWithConfigContextFaceLabelEnumFront DeviceWithConfigContextFaceLabelEnum = "Front"
DeviceWithConfigContextFaceLabelEnumRear DeviceWithConfigContextFaceLabelEnum = "Rear"
)



type DeviceWithConfigContextFaceValueEnum string

const (
    DeviceWithConfigContextFaceValueEnumFront DeviceWithConfigContextFaceValueEnum = "front"
DeviceWithConfigContextFaceValueEnumRear DeviceWithConfigContextFaceValueEnum = "rear"
)


type DeviceWithConfigContextFace struct {
    Label DeviceWithConfigContextFaceLabelEnum `json:"label"`
    Value DeviceWithConfigContextFaceValueEnum `json:"value"`
    
}


type DeviceWithConfigContextStatusLabelEnum string

const (
    DeviceWithConfigContextStatusLabelEnumOffline DeviceWithConfigContextStatusLabelEnum = "Offline"
DeviceWithConfigContextStatusLabelEnumActive DeviceWithConfigContextStatusLabelEnum = "Active"
DeviceWithConfigContextStatusLabelEnumPlanned DeviceWithConfigContextStatusLabelEnum = "Planned"
DeviceWithConfigContextStatusLabelEnumStaged DeviceWithConfigContextStatusLabelEnum = "Staged"
DeviceWithConfigContextStatusLabelEnumFailed DeviceWithConfigContextStatusLabelEnum = "Failed"
DeviceWithConfigContextStatusLabelEnumInventory DeviceWithConfigContextStatusLabelEnum = "Inventory"
DeviceWithConfigContextStatusLabelEnumDecommissioning DeviceWithConfigContextStatusLabelEnum = "Decommissioning"
)



type DeviceWithConfigContextStatusValueEnum string

const (
    DeviceWithConfigContextStatusValueEnumOffline DeviceWithConfigContextStatusValueEnum = "offline"
DeviceWithConfigContextStatusValueEnumActive DeviceWithConfigContextStatusValueEnum = "active"
DeviceWithConfigContextStatusValueEnumPlanned DeviceWithConfigContextStatusValueEnum = "planned"
DeviceWithConfigContextStatusValueEnumStaged DeviceWithConfigContextStatusValueEnum = "staged"
DeviceWithConfigContextStatusValueEnumFailed DeviceWithConfigContextStatusValueEnum = "failed"
DeviceWithConfigContextStatusValueEnumInventory DeviceWithConfigContextStatusValueEnum = "inventory"
DeviceWithConfigContextStatusValueEnumDecommissioning DeviceWithConfigContextStatusValueEnum = "decommissioning"
)


type DeviceWithConfigContextStatus struct {
    Label DeviceWithConfigContextStatusLabelEnum `json:"label"`
    Value DeviceWithConfigContextStatusValueEnum `json:"value"`
    
}

type DeviceWithConfigContext struct {
    AssetTag *string `json:"asset_tag,omitempty"`
    Cluster *NestedCluster `json:"cluster,omitempty"`
    Comments *string `json:"comments,omitempty"`
    ConfigContext map[string]string `json:"config_context,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    DeviceRole NestedDeviceRole `json:"device_role"`
    DeviceType NestedDeviceType `json:"device_type"`
    DisplayName *string `json:"display_name,omitempty"`
    Face *DeviceWithConfigContextFace `json:"face,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    LocalContextData *string `json:"local_context_data,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentDevice *NestedDevice `json:"parent_device,omitempty"`
    Platform *NestedPlatform `json:"platform,omitempty"`
    Position *int64 `json:"position,omitempty"`
    PrimaryIP *NestedIPAddress `json:"primary_ip,omitempty"`
    PrimaryIp4 *NestedIPAddress `json:"primary_ip4,omitempty"`
    PrimaryIp6 *NestedIPAddress `json:"primary_ip6,omitempty"`
    Rack *NestedRack `json:"rack,omitempty"`
    Serial *string `json:"serial,omitempty"`
    Site NestedSite `json:"site"`
    Status *DeviceWithConfigContextStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    VcPosition *int64 `json:"vc_position,omitempty"`
    VcPriority *int64 `json:"vc_priority,omitempty"`
    VirtualChassis *NestedVirtualChassis `json:"virtual_chassis,omitempty"`
    
}

