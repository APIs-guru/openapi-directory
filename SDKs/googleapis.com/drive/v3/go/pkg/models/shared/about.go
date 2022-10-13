package shared

type AboutDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink"`
	ColorRgb            *string `json:"colorRgb"`
	ID                  *string `json:"id"`
}

type AboutStorageQuota struct {
	Limit             *string `json:"limit"`
	Usage             *string `json:"usage"`
	UsageInDrive      *string `json:"usageInDrive"`
	UsageInDriveTrash *string `json:"usageInDriveTrash"`
}

type AboutTeamDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink"`
	ColorRgb            *string `json:"colorRgb"`
	ID                  *string `json:"id"`
}

type About struct {
	AppInstalled        *bool                  `json:"appInstalled"`
	CanCreateDrives     *bool                  `json:"canCreateDrives"`
	CanCreateTeamDrives *bool                  `json:"canCreateTeamDrives"`
	DriveThemes         []AboutDriveThemes     `json:"driveThemes"`
	ExportFormats       map[string][]string    `json:"exportFormats"`
	FolderColorPalette  []string               `json:"folderColorPalette"`
	ImportFormats       map[string][]string    `json:"importFormats"`
	Kind                *string                `json:"kind"`
	MaxImportSizes      map[string]string      `json:"maxImportSizes"`
	MaxUploadSize       *string                `json:"maxUploadSize"`
	StorageQuota        *AboutStorageQuota     `json:"storageQuota"`
	TeamDriveThemes     []AboutTeamDriveThemes `json:"teamDriveThemes"`
	User                *User                  `json:"user"`
}
