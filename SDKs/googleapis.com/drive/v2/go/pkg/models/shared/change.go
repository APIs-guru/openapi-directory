package shared

import (
	"time"
)

type Change struct {
	ChangeType       *string    `json:"changeType"`
	Deleted          *bool      `json:"deleted"`
	Drive            *Drive     `json:"drive"`
	DriveID          *string    `json:"driveId"`
	File             *File      `json:"file"`
	FileID           *string    `json:"fileId"`
	ID               *string    `json:"id"`
	Kind             *string    `json:"kind"`
	ModificationDate *time.Time `json:"modificationDate"`
	SelfLink         *string    `json:"selfLink"`
	TeamDrive        *TeamDrive `json:"teamDrive"`
	TeamDriveID      *string    `json:"teamDriveId"`
	Type             *string    `json:"type"`
}
