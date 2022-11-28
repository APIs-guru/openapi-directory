package shared

import (
	"time"
)

// FontFile
// Class FontFile.
type FontFile struct {
	DateCreated  *time.Time `json:"DateCreated,omitempty"`
	DateModified *time.Time `json:"DateModified,omitempty"`
	Name         *string    `json:"Name,omitempty"`
	Size         *int64     `json:"Size,omitempty"`
}
