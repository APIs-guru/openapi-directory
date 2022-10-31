package shared

import (
"time")

type LandlordChaseNoteModel struct {
    Date *time.Time `json:"Date,omitempty"`
    Note *string `json:"Note,omitempty"`
    NoteType *string `json:"NoteType,omitempty"`
    TenantID *string `json:"TenantID,omitempty"`
    
}

