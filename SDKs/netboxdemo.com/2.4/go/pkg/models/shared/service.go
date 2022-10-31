package shared

import (
"time")

type ServiceProtocol struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type Service struct {
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    Device *NestedDevice `json:"device,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Ipaddresses []NestedIPAddress `json:"ipaddresses,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    Port int64 `json:"port"`
    Protocol ServiceProtocol `json:"protocol"`
    VirtualMachine *NestedVirtualMachine `json:"virtual_machine,omitempty"`
    
}

