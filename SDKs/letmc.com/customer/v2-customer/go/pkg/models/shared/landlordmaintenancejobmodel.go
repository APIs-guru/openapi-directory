package shared

import (
"time")

type LandlordMaintenanceJobModel struct {
    AssignedTo *string `json:"AssignedTo,omitempty"`
    ClosedDate *time.Time `json:"ClosedDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    MaintenanceNotes []LandlordMaintenanceJobNoteModel `json:"MaintenanceNotes,omitempty"`
    Property *string `json:"Property,omitempty"`
    Reported *time.Time `json:"Reported,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

