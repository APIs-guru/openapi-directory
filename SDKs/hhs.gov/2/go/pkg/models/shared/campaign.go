package shared

import (
	"time"
)

type Campaign struct {
	ContactEmail *string    `json:"contactEmail"`
	Description  *string    `json:"description"`
	EndDate      *time.Time `json:"endDate"`
	ID           *int64     `json:"id"`
	Name         *string    `json:"name"`
	Source       *Source    `json:"source"`
	StartDate    *time.Time `json:"startDate"`
}
