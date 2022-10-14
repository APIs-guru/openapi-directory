package shared

import (
	"time"
)

type AppointmentAuditViewModel struct {
	AppointmentID    *string    `json:"appointmentId,omitempty"`
	ID               *string    `json:"id,omitempty"`
	ModificationType *string    `json:"modificationType,omitempty"`
	ModifiedBy       *string    `json:"modifiedBy,omitempty"`
	ModifiedOn       *time.Time `json:"modifiedOn,omitempty"`
	NotesAfter       *string    `json:"notesAfter,omitempty"`
	NotesBefore      *string    `json:"notesBefore,omitempty"`
	StatusAfter      *string    `json:"statusAfter,omitempty"`
	StatusBefore     *string    `json:"statusBefore,omitempty"`
}
