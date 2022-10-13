package shared

import (
	"time"
)

type RackReservation struct {
	Created     *time.Time    `json:"created"`
	Description string        `json:"description"`
	ID          *int64        `json:"id"`
	Rack        NestedRack    `json:"rack"`
	Tenant      *NestedTenant `json:"tenant"`
	Units       []int64       `json:"units"`
	User        NestedUser    `json:"user"`
}
