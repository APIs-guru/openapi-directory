package shared

import (
	"time"
)

type Measurement struct {
	Timestamp *time.Time `json:"timestamp"`
	Value     *float64   `json:"value"`
}
