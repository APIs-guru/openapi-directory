package shared

import (
	"time"
)

type WritableCluster struct {
	Comments            *string                `json:"comments"`
	Created             *time.Time             `json:"created"`
	CustomFields        map[string]interface{} `json:"custom_fields"`
	DeviceCount         *int64                 `json:"device_count"`
	Group               *int64                 `json:"group"`
	ID                  *int64                 `json:"id"`
	LastUpdated         *time.Time             `json:"last_updated"`
	Name                string                 `json:"name"`
	Site                *int64                 `json:"site"`
	Tags                []string               `json:"tags"`
	Tenant              *int64                 `json:"tenant"`
	Type                int64                  `json:"type"`
	VirtualmachineCount *int64                 `json:"virtualmachine_count"`
}
