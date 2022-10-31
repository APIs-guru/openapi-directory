package shared

import (
"time")

type DeviceWithConfigContextFace struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type DeviceWithConfigContextStatus struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type DeviceWithConfigContext struct {
    AssetTag *string `json:"asset_tag,omitempty"`
    Cluster *NestedCluster `json:"cluster,omitempty"`
    Comments *string `json:"comments,omitempty"`
    ConfigContext *string `json:"config_context,omitempty"`
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
    ParentDevice *string `json:"parent_device,omitempty"`
    Platform *NestedPlatform `json:"platform,omitempty"`
    Position *int64 `json:"position,omitempty"`
    PrimaryIP *DeviceIPAddress `json:"primary_ip,omitempty"`
    PrimaryIp4 *DeviceIPAddress `json:"primary_ip4,omitempty"`
    PrimaryIp6 *DeviceIPAddress `json:"primary_ip6,omitempty"`
    Rack *NestedRack `json:"rack,omitempty"`
    Serial *string `json:"serial,omitempty"`
    Site NestedSite `json:"site"`
    Status *DeviceWithConfigContextStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    VcPosition *int64 `json:"vc_position,omitempty"`
    VcPriority *int64 `json:"vc_priority,omitempty"`
    VirtualChassis *DeviceVirtualChassis `json:"virtual_chassis,omitempty"`
    
}

