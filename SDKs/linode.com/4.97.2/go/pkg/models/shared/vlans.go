package shared

import (
	"time"
)

// Vlans
// A virtual local area network (VLAN) associated with your Account.
type Vlans struct {
	Created *time.Time `json:"created,omitempty"`
	Label   *string    `json:"label,omitempty"`
	Linodes []int64    `json:"linodes,omitempty"`
	Region  *string    `json:"region,omitempty"`
}
