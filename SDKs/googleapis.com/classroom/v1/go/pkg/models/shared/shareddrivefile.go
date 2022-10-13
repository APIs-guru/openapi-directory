package shared

type SharedDriveFileShareModeEnum string

const (
	SharedDriveFileShareModeEnumUnknownShareMode SharedDriveFileShareModeEnum = "UNKNOWN_SHARE_MODE"
	SharedDriveFileShareModeEnumView             SharedDriveFileShareModeEnum = "VIEW"
	SharedDriveFileShareModeEnumEdit             SharedDriveFileShareModeEnum = "EDIT"
	SharedDriveFileShareModeEnumStudentCopy      SharedDriveFileShareModeEnum = "STUDENT_COPY"
)

type SharedDriveFile struct {
	DriveFile *DriveFile                    `json:"driveFile"`
	ShareMode *SharedDriveFileShareModeEnum `json:"shareMode"`
}
