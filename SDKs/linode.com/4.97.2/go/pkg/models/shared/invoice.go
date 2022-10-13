package shared

import (
	"time"
)

type Invoice struct {
	Date     *time.Time `json:"date"`
	ID       *int64     `json:"id"`
	Label    *string    `json:"label"`
	Subtotal *float64   `json:"subtotal"`
	Tax      *float64   `json:"tax"`
	Total    *float64   `json:"total"`
}
