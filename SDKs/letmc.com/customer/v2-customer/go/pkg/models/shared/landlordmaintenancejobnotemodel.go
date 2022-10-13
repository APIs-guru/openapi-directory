package shared

import (
	"time"
)

type LandlordMaintenanceJobNoteModel struct {
	CreatedAt    *time.Time `json:"CreatedAt"`
	NoteContents *string    `json:"NoteContents"`
	Oid          *string    `json:"OID"`
}
