package shared

import (
	"time"
)

// LandlordMaintenanceJobNoteModel
// Maintenance Job Note Helper Model:-
type LandlordMaintenanceJobNoteModel struct {
	CreatedAt    *time.Time `json:"CreatedAt,omitempty"`
	NoteContents *string    `json:"NoteContents,omitempty"`
	Oid          *string    `json:"OID,omitempty"`
}
