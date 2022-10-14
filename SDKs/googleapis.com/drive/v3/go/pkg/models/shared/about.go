package shared

type AboutDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink,omitempty"`
	ColorRgb            *string `json:"colorRgb,omitempty"`
	ID                  *string `json:"id,omitempty"`
}

type AboutStorageQuota struct {
	Limit             *string `json:"limit,omitempty"`
	Usage             *string `json:"usage,omitempty"`
	UsageInDrive      *string `json:"usageInDrive,omitempty"`
	UsageInDriveTrash *string `json:"usageInDriveTrash,omitempty"`
}

type AboutTeamDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink,omitempty"`
	ColorRgb            *string `json:"colorRgb,omitempty"`
	ID                  *string `json:"id,omitempty"`
}

type About struct {
	AppInstalled        *bool                  `json:"appInstalled,omitempty"`
	CanCreateDrives     *bool                  `json:"canCreateDrives,omitempty"`
	CanCreateTeamDrives *bool                  `json:"canCreateTeamDrives,omitempty"`
	DriveThemes         []AboutDriveThemes     `json:"driveThemes,omitempty"`
	ExportFormats       map[string][]string    `json:"exportFormats,omitempty"`
	FolderColorPalette  []string               `json:"folderColorPalette,omitempty"`
	ImportFormats       map[string][]string    `json:"importFormats,omitempty"`
	Kind                *string                `json:"kind,omitempty"`
	MaxImportSizes      map[string]string      `json:"maxImportSizes,omitempty"`
	MaxUploadSize       *string                `json:"maxUploadSize,omitempty"`
	StorageQuota        *AboutStorageQuota     `json:"storageQuota,omitempty"`
	TeamDriveThemes     []AboutTeamDriveThemes `json:"teamDriveThemes,omitempty"`
	User                *User                  `json:"user,omitempty"`
}
