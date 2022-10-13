package shared

import (
	"time"
)

type AppointmentAuditViewModel struct {
	AppointmentID    *string    `json:"appointmentId"`
	ID               *string    `json:"id"`
	ModificationType *string    `json:"modificationType"`
	ModifiedBy       *string    `json:"modifiedBy"`
	ModifiedOn       *time.Time `json:"modifiedOn"`
	NotesAfter       *string    `json:"notesAfter"`
	NotesBefore      *string    `json:"notesBefore"`
	StatusAfter      *string    `json:"statusAfter"`
	StatusBefore     *string    `json:"statusBefore"`
}
