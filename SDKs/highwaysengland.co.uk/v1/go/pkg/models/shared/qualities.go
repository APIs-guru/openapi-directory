package shared

import (
	"time"
)

type Qualities struct {
	Date    *time.Time `json:"Date"`
	Quality *int32     `json:"Quality"`
}
