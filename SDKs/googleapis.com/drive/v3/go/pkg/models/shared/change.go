package shared

import (
	"time"
)

type Change struct {
	ChangeType  *string    `json:"changeType"`
	Drive       *Drive     `json:"drive"`
	DriveID     *string    `json:"driveId"`
	File        *File      `json:"file"`
	FileID      *string    `json:"fileId"`
	Kind        *string    `json:"kind"`
	Removed     *bool      `json:"removed"`
	TeamDrive   *TeamDrive `json:"teamDrive"`
	TeamDriveID *string    `json:"teamDriveId"`
	Time        *time.Time `json:"time"`
	Type        *string    `json:"type"`
}
