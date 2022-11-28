package shared

import (
	"time"
)

// LandlordChaseNoteModel
// Landlord Arrears Chase Note.
type LandlordChaseNoteModel struct {
	Date     *time.Time `json:"Date,omitempty"`
	Note     *string    `json:"Note,omitempty"`
	NoteType *string    `json:"NoteType,omitempty"`
	TenantID *string    `json:"TenantID,omitempty"`
}
