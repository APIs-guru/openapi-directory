package shared

import (
	"time"
)

// Meta
// Meta Data relevant to the payload
type Meta struct {
	FirstAvailableDateTime *time.Time `json:"FirstAvailableDateTime,omitempty"`
	LastAvailableDateTime  *time.Time `json:"LastAvailableDateTime,omitempty"`
	TotalPages             *int32     `json:"TotalPages,omitempty"`
}
