package shared

import (
	"time"
)

type GuideInfo struct {
	EndDate   *time.Time `json:"EndDate"`
	StartDate *time.Time `json:"StartDate"`
}
