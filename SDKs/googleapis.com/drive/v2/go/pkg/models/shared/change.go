package shared

import (
"time")

type Change struct {
    ChangeType *string `json:"changeType,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    Drive *Drive `json:"drive,omitempty"`
    DriveID *string `json:"driveId,omitempty"`
    File *File `json:"file,omitempty"`
    FileID *string `json:"fileId,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ModificationDate *time.Time `json:"modificationDate,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    TeamDrive *TeamDrive `json:"teamDrive,omitempty"`
    TeamDriveID *string `json:"teamDriveId,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

