package shared

import (
	"time"
)

type LandlordChaseNoteModel struct {
	Date     *time.Time `json:"Date"`
	Note     *string    `json:"Note"`
	NoteType *string    `json:"NoteType"`
	TenantID *string    `json:"TenantID"`
}
