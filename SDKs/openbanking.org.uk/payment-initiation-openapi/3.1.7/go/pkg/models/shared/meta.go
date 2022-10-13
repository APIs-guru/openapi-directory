package shared

import (
	"time"
)

type Meta struct {
	FirstAvailableDateTime *time.Time `json:"FirstAvailableDateTime"`
	LastAvailableDateTime  *time.Time `json:"LastAvailableDateTime"`
	TotalPages             *int32     `json:"TotalPages"`
}
