package shared

import (
	"time"
)

type Interval struct {
	Change        *float64   `json:"change"`
	ChangePercent *float64   `json:"changePercent"`
	End           *time.Time `json:"end"`
	High          *float64   `json:"high"`
	Last          *float64   `json:"last"`
	Low           *float64   `json:"low"`
	Open          *float64   `json:"open"`
	Start         *time.Time `json:"start"`
}
