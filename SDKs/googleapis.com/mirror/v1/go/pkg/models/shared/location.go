package shared

import (
	"time"
)

// Location
// A geographic location that can be associated with a timeline item.
type Location struct {
	Accuracy    *float64   `json:"accuracy,omitempty"`
	Address     *string    `json:"address,omitempty"`
	DisplayName *string    `json:"displayName,omitempty"`
	ID          *string    `json:"id,omitempty"`
	Kind        *string    `json:"kind,omitempty"`
	Latitude    *float64   `json:"latitude,omitempty"`
	Longitude   *float64   `json:"longitude,omitempty"`
	Timestamp   *time.Time `json:"timestamp,omitempty"`
}
