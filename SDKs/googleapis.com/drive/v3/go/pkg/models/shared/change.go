package shared

import (
	"time"
)

type Change struct {
	ChangeType  *string    `json:"changeType,omitempty"`
	Drive       *Drive     `json:"drive,omitempty"`
	DriveID     *string    `json:"driveId,omitempty"`
	File        *File      `json:"file,omitempty"`
	FileID      *string    `json:"fileId,omitempty"`
	Kind        *string    `json:"kind,omitempty"`
	Removed     *bool      `json:"removed,omitempty"`
	TeamDrive   *TeamDrive `json:"teamDrive,omitempty"`
	TeamDriveID *string    `json:"teamDriveId,omitempty"`
	Time        *time.Time `json:"time,omitempty"`
	Type        *string    `json:"type,omitempty"`
}
