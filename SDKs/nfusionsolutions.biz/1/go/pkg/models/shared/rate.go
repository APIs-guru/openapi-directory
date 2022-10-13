package shared

import (
	"time"
)

type Rate struct {
	Symbol    *string    `json:"symbol"`
	Timestamp *time.Time `json:"timestamp"`
	Value     *float64   `json:"value"`
}
