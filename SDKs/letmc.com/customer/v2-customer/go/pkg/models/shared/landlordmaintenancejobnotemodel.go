package shared

import (
	"time"
)

type LandlordMaintenanceJobNoteModel struct {
	CreatedAt    *time.Time `json:"CreatedAt,omitempty"`
	NoteContents *string    `json:"NoteContents,omitempty"`
	Oid          *string    `json:"OID,omitempty"`
}
