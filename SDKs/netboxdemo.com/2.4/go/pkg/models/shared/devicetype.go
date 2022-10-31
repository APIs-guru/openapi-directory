package shared

import (
"time")

type DeviceTypeInterfaceOrdering struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type DeviceTypeSubdeviceRole struct {
    Label string `json:"label"`
    Value bool `json:"value"`
    
}

type DeviceType struct {
    Comments *string `json:"comments,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    ID *int64 `json:"id,omitempty"`
    InstanceCount *int64 `json:"instance_count,omitempty"`
    InterfaceOrdering *DeviceTypeInterfaceOrdering `json:"interface_ordering,omitempty"`
    IsConsoleServer *bool `json:"is_console_server,omitempty"`
    IsFullDepth *bool `json:"is_full_depth,omitempty"`
    IsNetworkDevice *bool `json:"is_network_device,omitempty"`
    IsPdu *bool `json:"is_pdu,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Manufacturer NestedManufacturer `json:"manufacturer"`
    Model string `json:"model"`
    PartNumber *string `json:"part_number,omitempty"`
    Slug string `json:"slug"`
    SubdeviceRole *DeviceTypeSubdeviceRole `json:"subdevice_role,omitempty"`
    Tags []string `json:"tags,omitempty"`
    UHeight *int64 `json:"u_height,omitempty"`
    
}

