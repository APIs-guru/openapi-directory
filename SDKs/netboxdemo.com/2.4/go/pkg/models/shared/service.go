package shared

import (
	"time"
)

type ServiceProtocolProtocol struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Service struct {
	Created        *time.Time              `json:"created"`
	CustomFields   map[string]interface{}  `json:"custom_fields"`
	Description    *string                 `json:"description"`
	Device         *NestedDevice           `json:"device"`
	ID             *int64                  `json:"id"`
	Ipaddresses    []NestedIPAddress       `json:"ipaddresses"`
	LastUpdated    *time.Time              `json:"last_updated"`
	Name           string                  `json:"name"`
	Port           int64                   `json:"port"`
	Protocol       ServiceProtocolProtocol `json:"protocol"`
	VirtualMachine *NestedVirtualMachine   `json:"virtual_machine"`
}
