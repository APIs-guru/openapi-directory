package shared

import (
	"time"
)

type LandlordLettingsInspectionModel struct {
	InspectionDate *time.Time `json:"InspectionDate,omitempty"`
	Notes          *string    `json:"Notes,omitempty"`
}
