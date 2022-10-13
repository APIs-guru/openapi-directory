package shared

import (
	"time"
)

type LandlordMaintenanceJobModel struct {
	AssignedTo       *string                           `json:"AssignedTo"`
	ClosedDate       *time.Time                        `json:"ClosedDate"`
	Description      *string                           `json:"Description"`
	MaintenanceNotes []LandlordMaintenanceJobNoteModel `json:"MaintenanceNotes"`
	Property         *string                           `json:"Property"`
	Reported         *time.Time                        `json:"Reported"`
	Status           *string                           `json:"Status"`
}
