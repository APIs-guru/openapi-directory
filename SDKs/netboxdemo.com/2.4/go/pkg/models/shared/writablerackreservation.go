package shared

import (
	"time"
)

type WritableRackReservation struct {
	Created     *time.Time `json:"created"`
	Description string     `json:"description"`
	ID          *int64     `json:"id"`
	Rack        int64      `json:"rack"`
	Tenant      *int64     `json:"tenant"`
	Units       []int64    `json:"units"`
	User        int64      `json:"user"`
}
