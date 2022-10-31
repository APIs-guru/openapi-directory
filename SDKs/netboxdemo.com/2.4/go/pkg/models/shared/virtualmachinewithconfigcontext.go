package shared

import (
"time")

type VirtualMachineWithConfigContextStatus struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type VirtualMachineWithConfigContext struct {
    Cluster NestedCluster `json:"cluster"`
    Comments *string `json:"comments,omitempty"`
    ConfigContext *string `json:"config_context,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Disk *int64 `json:"disk,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    LocalContextData *string `json:"local_context_data,omitempty"`
    Memory *int64 `json:"memory,omitempty"`
    Name string `json:"name"`
    Platform *NestedPlatform `json:"platform,omitempty"`
    PrimaryIP *VirtualMachineIPAddress `json:"primary_ip,omitempty"`
    PrimaryIp4 *VirtualMachineIPAddress `json:"primary_ip4,omitempty"`
    PrimaryIp6 *VirtualMachineIPAddress `json:"primary_ip6,omitempty"`
    Role *NestedDeviceRole `json:"role,omitempty"`
    Status *VirtualMachineWithConfigContextStatus `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    Vcpus *int64 `json:"vcpus,omitempty"`
    
}

