package shared

import (
	"time"
)

// Invoice
// Account Invoice object
type Invoice struct {
	Date     *time.Time `json:"date,omitempty"`
	ID       *int64     `json:"id,omitempty"`
	Label    *string    `json:"label,omitempty"`
	Subtotal *float64   `json:"subtotal,omitempty"`
	Tax      *float64   `json:"tax,omitempty"`
	Total    *float64   `json:"total,omitempty"`
}
