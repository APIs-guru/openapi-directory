package shared

import (
	"time"
)

type Measurement struct {
	Timestamp *time.Time `json:"timestamp,omitempty"`
	Value     *float64   `json:"value,omitempty"`
}
