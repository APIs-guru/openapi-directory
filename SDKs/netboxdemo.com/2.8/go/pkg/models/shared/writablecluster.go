package shared

import (
"time")

type WritableCluster struct {
    Comments *string `json:"comments,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    DeviceCount *int64 `json:"device_count,omitempty"`
    Group *int64 `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    Site *int64 `json:"site,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Tenant *int64 `json:"tenant,omitempty"`
    Type int64 `json:"type"`
    VirtualmachineCount *int64 `json:"virtualmachine_count,omitempty"`
    
}

