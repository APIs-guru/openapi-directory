package shared

import (
	"time"
)

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

type ServiceProtocolProtocol struct {
	Label ServiceProtocolLabelEnum `json:"label"`
	Value ServiceProtocolValueEnum `json:"value"`
}

type Service struct {
	Created        *time.Time               `json:"created"`
	CustomFields   map[string]interface{}   `json:"custom_fields"`
	Description    *string                  `json:"description"`
	Device         *NestedDevice            `json:"device"`
	ID             *int64                   `json:"id"`
	Ipaddresses    []NestedIPAddress        `json:"ipaddresses"`
	LastUpdated    *time.Time               `json:"last_updated"`
	Name           string                   `json:"name"`
	Port           int64                    `json:"port"`
	Protocol       *ServiceProtocolProtocol `json:"protocol"`
	Tags           []string                 `json:"tags"`
	VirtualMachine *NestedVirtualMachine    `json:"virtual_machine"`
}
