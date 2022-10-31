package shared

import (
"time")


type ServiceProtocolLabelEnum string

const (
    ServiceProtocolLabelEnumTCP ServiceProtocolLabelEnum = "TCP"
ServiceProtocolLabelEnumUDP ServiceProtocolLabelEnum = "UDP"
)



type ServiceProtocolValueEnum string

const (
    ServiceProtocolValueEnumTCP ServiceProtocolValueEnum = "tcp"
ServiceProtocolValueEnumUDP ServiceProtocolValueEnum = "udp"
)


type ServiceProtocol struct {
    Label ServiceProtocolLabelEnum `json:"label"`
    Value ServiceProtocolValueEnum `json:"value"`
    
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
    Protocol *ServiceProtocol `json:"protocol,omitempty"`
    Tags []string `json:"tags,omitempty"`
    VirtualMachine *NestedVirtualMachine `json:"virtual_machine,omitempty"`
    
}

