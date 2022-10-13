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
	Created        *time.Time                          `json:"created"`
	CustomFields   map[string]interface{}              `json:"custom_fields"`
	Description    *string                             `json:"description"`
	Device         *int64                              `json:"device"`
	ID             *int64                              `json:"id"`
	Ipaddresses    []int64                             `json:"ipaddresses"`
	LastUpdated    *time.Time                          `json:"last_updated"`
	Name           string                              `json:"name"`
	Port           int64                               `json:"port"`
	Protocol       WritableServiceProtocolProtocolEnum `json:"protocol"`
	Tags           []string                            `json:"tags"`
	VirtualMachine *int64                              `json:"virtual_machine"`
}
