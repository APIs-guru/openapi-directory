package shared

import (
	"time"
)

type NodeBalancerTransfer struct {
	In    *float64 `json:"in"`
	Out   *float64 `json:"out"`
	Total *float64 `json:"total"`
}

type NodeBalancer struct {
	ClientConnThrottle *int64                `json:"client_conn_throttle"`
	Created            *time.Time            `json:"created"`
	Hostname           *string               `json:"hostname"`
	ID                 *int64                `json:"id"`
	Ipv4               *string               `json:"ipv4"`
	Ipv6               *string               `json:"ipv6"`
	Label              *string               `json:"label"`
	Region             *string               `json:"region"`
	Tags               []string              `json:"tags"`
	Transfer           *NodeBalancerTransfer `json:"transfer"`
	Updated            *time.Time            `json:"updated"`
}
