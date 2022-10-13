package shared

import (
	"time"
)

type Location struct {
	Accuracy    *float64   `json:"accuracy"`
	Address     *string    `json:"address"`
	DisplayName *string    `json:"displayName"`
	ID          *string    `json:"id"`
	Kind        *string    `json:"kind"`
	Latitude    *float64   `json:"latitude"`
	Longitude   *float64   `json:"longitude"`
	Timestamp   *time.Time `json:"timestamp"`
}
