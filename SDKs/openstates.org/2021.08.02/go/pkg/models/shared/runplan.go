package shared

import (
	"time"
)

type RunPlan struct {
	EndTime   time.Time `json:"end_time"`
	StartTime time.Time `json:"start_time"`
	Success   bool      `json:"success"`
}
