package shared

import (
	"time"
)

type LandlordLettingsInspectionModel struct {
	InspectionDate *time.Time `json:"InspectionDate"`
	Notes          *string    `json:"Notes"`
}
