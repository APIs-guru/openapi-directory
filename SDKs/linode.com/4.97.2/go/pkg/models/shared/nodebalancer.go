package shared

import (
	"time"
)

// NodeBalancerTransfer
// Information about the amount of transfer this NodeBalancer has had so far this month.
type NodeBalancerTransfer struct {
	In    *float64 `json:"in,omitempty"`
	Out   *float64 `json:"out,omitempty"`
	Total *float64 `json:"total,omitempty"`
}

// NodeBalancer
// Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
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

// NodeBalancerInput
// Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
type NodeBalancerInput struct {
	ClientConnThrottle *int64   `json:"client_conn_throttle,omitempty"`
	Label              *string  `json:"label,omitempty"`
	Tags               []string `json:"tags,omitempty"`
}
