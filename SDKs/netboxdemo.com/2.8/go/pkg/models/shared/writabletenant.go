package shared

import (
	"time"
)

type WritableTenant struct {
	CircuitCount        *int64                 `json:"circuit_count"`
	ClusterCount        *int64                 `json:"cluster_count"`
	Comments            *string                `json:"comments"`
	Created             *time.Time             `json:"created"`
	CustomFields        map[string]interface{} `json:"custom_fields"`
	Description         *string                `json:"description"`
	DeviceCount         *int64                 `json:"device_count"`
	Group               *int64                 `json:"group"`
	ID                  *int64                 `json:"id"`
	IpaddressCount      *int64                 `json:"ipaddress_count"`
	LastUpdated         *time.Time             `json:"last_updated"`
	Name                string                 `json:"name"`
	PrefixCount         *int64                 `json:"prefix_count"`
	RackCount           *int64                 `json:"rack_count"`
	SiteCount           *int64                 `json:"site_count"`
	Slug                string                 `json:"slug"`
	Tags                []string               `json:"tags"`
	VirtualmachineCount *int64                 `json:"virtualmachine_count"`
	VlanCount           *int64                 `json:"vlan_count"`
	VrfCount            *int64                 `json:"vrf_count"`
}
