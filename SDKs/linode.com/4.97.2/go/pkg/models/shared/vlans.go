package shared

import (
	"time"
)

type Vlans struct {
	Created *time.Time `json:"created"`
	Label   *string    `json:"label"`
	Linodes []int64    `json:"linodes"`
	Region  *string    `json:"region"`
}
