package shared

import (
	"time"
)

type WritableTenant struct {
	CircuitCount        *int64                 `json:"circuit_count,omitempty"`
	ClusterCount        *int64                 `json:"cluster_count,omitempty"`
	Comments            *string                `json:"comments,omitempty"`
	Created             *time.Time             `json:"created,omitempty"`
	CustomFields        map[string]interface{} `json:"custom_fields,omitempty"`
	Description         *string                `json:"description,omitempty"`
	DeviceCount         *int64                 `json:"device_count,omitempty"`
	Group               *int64                 `json:"group,omitempty"`
	ID                  *int64                 `json:"id,omitempty"`
	IpaddressCount      *int64                 `json:"ipaddress_count,omitempty"`
	LastUpdated         *time.Time             `json:"last_updated,omitempty"`
	Name                string                 `json:"name"`
	PrefixCount         *int64                 `json:"prefix_count,omitempty"`
	RackCount           *int64                 `json:"rack_count,omitempty"`
	SiteCount           *int64                 `json:"site_count,omitempty"`
	Slug                string                 `json:"slug"`
	Tags                []string               `json:"tags,omitempty"`
	VirtualmachineCount *int64                 `json:"virtualmachine_count,omitempty"`
	VlanCount           *int64                 `json:"vlan_count,omitempty"`
	VrfCount            *int64                 `json:"vrf_count,omitempty"`
}
