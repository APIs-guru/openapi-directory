package shared

import (
	"time"
)

type Cluster struct {
	Comments            *string                `json:"comments"`
	Created             *time.Time             `json:"created"`
	CustomFields        map[string]interface{} `json:"custom_fields"`
	DeviceCount         *int64                 `json:"device_count"`
	Group               *NestedClusterGroup    `json:"group"`
	ID                  *int64                 `json:"id"`
	LastUpdated         *time.Time             `json:"last_updated"`
	Name                string                 `json:"name"`
	Site                *NestedSite            `json:"site"`
	Tags                []string               `json:"tags"`
	Tenant              *NestedTenant          `json:"tenant"`
	Type                NestedClusterType      `json:"type"`
	VirtualmachineCount *int64                 `json:"virtualmachine_count"`
}
