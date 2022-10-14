package shared

import (
	"time"
)

type WritableServiceProtocolProtocolEnum string

const (
	WritableServiceProtocolProtocolEnumTCP WritableServiceProtocolProtocolEnum = "tcp"
	WritableServiceProtocolProtocolEnumUDP WritableServiceProtocolProtocolEnum = "udp"
)

type WritableService struct {
	Created        *time.Time                          `json:"created,omitempty"`
	CustomFields   map[string]interface{}              `json:"custom_fields,omitempty"`
	Description    *string                             `json:"description,omitempty"`
	Device         *int64                              `json:"device,omitempty"`
	ID             *int64                              `json:"id,omitempty"`
	Ipaddresses    []int64                             `json:"ipaddresses,omitempty"`
	LastUpdated    *time.Time                          `json:"last_updated,omitempty"`
	Name           string                              `json:"name"`
	Port           int64                               `json:"port"`
	Protocol       WritableServiceProtocolProtocolEnum `json:"protocol"`
	Tags           []string                            `json:"tags,omitempty"`
	VirtualMachine *int64                              `json:"virtual_machine,omitempty"`
}
