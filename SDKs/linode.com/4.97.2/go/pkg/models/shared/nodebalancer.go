package shared

import (
	"time"
)

type NodeBalancerTransfer struct {
	In    *float64 `json:"in,omitempty"`
	Out   *float64 `json:"out,omitempty"`
	Total *float64 `json:"total,omitempty"`
}

type NodeBalancer struct {
	ClientConnThrottle *int64                `json:"client_conn_throttle,omitempty"`
	Created            *time.Time            `json:"created,omitempty"`
	Hostname           *string               `json:"hostname,omitempty"`
	ID                 *int64                `json:"id,omitempty"`
	Ipv4               *string               `json:"ipv4,omitempty"`
	Ipv6               *string               `json:"ipv6,omitempty"`
	Label              *string               `json:"label,omitempty"`
	Region             *string               `json:"region,omitempty"`
	Tags               []string              `json:"tags,omitempty"`
	Transfer           *NodeBalancerTransfer `json:"transfer,omitempty"`
	Updated            *time.Time            `json:"updated,omitempty"`
}
