package shared

import (
"time")


type WritableServiceProtocolEnum string

const (
    WritableServiceProtocolEnumTCP WritableServiceProtocolEnum = "tcp"
WritableServiceProtocolEnumUDP WritableServiceProtocolEnum = "udp"
)


type WritableService struct {
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    Description *string `json:"description,omitempty"`
    Device *int64 `json:"device,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Ipaddresses []int64 `json:"ipaddresses,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Name string `json:"name"`
    Port int64 `json:"port"`
    Protocol WritableServiceProtocolEnum `json:"protocol"`
    Tags []string `json:"tags,omitempty"`
    VirtualMachine *int64 `json:"virtual_machine,omitempty"`
    
}

