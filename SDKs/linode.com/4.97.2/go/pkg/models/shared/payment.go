package shared

import (
	"time"
)

type Payment struct {
	Date *time.Time `json:"date"`
	ID   *int64     `json:"id"`
	Usd  *int64     `json:"usd"`
}
