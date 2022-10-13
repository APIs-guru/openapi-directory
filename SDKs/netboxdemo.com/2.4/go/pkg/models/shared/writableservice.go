package shared

import (
	"time"
)

type WritableService struct {
	Created        *time.Time             `json:"created"`
	CustomFields   map[string]interface{} `json:"custom_fields"`
	Description    *string                `json:"description"`
	Device         *int64                 `json:"device"`
	ID             *int64                 `json:"id"`
	Ipaddresses    []int64                `json:"ipaddresses"`
	LastUpdated    *time.Time             `json:"last_updated"`
	Name           string                 `json:"name"`
	Port           int64                  `json:"port"`
	Protocol       int64                  `json:"protocol"`
	VirtualMachine *int64                 `json:"virtual_machine"`
}
