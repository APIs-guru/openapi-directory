package shared

type FolderTypeEnum string

const (
	FolderTypeEnumTypeUnspecified FolderTypeEnum = "TYPE_UNSPECIFIED"
	FolderTypeEnumMyDriveRoot     FolderTypeEnum = "MY_DRIVE_ROOT"
	FolderTypeEnumTeamDriveRoot   FolderTypeEnum = "TEAM_DRIVE_ROOT"
	FolderTypeEnumStandardFolder  FolderTypeEnum = "STANDARD_FOLDER"
)

// Folder
// This item is deprecated; please see `DriveFolder` instead.
type Folder struct {
	Type *FolderTypeEnum `json:"type,omitempty"`
}
