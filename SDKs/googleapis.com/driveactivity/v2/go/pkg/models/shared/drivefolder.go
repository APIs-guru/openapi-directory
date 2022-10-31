package shared

type DriveFolderTypeEnum string

const (
	DriveFolderTypeEnumTypeUnspecified DriveFolderTypeEnum = "TYPE_UNSPECIFIED"
	DriveFolderTypeEnumMyDriveRoot     DriveFolderTypeEnum = "MY_DRIVE_ROOT"
	DriveFolderTypeEnumSharedDriveRoot DriveFolderTypeEnum = "SHARED_DRIVE_ROOT"
	DriveFolderTypeEnumStandardFolder  DriveFolderTypeEnum = "STANDARD_FOLDER"
)

type DriveFolder struct {
	Type *DriveFolderTypeEnum `json:"type,omitempty"`
}
