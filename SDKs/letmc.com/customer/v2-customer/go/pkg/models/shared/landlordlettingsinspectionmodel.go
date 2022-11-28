package shared

import (
	"time"
)

// LandlordLettingsInspectionModel
// Lettings Inspection
type LandlordLettingsInspectionModel struct {
	InspectionDate *time.Time `json:"InspectionDate,omitempty"`
	Notes          *string    `json:"Notes,omitempty"`
}
