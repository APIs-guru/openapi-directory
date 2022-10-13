package shared

type AboutAdditionalRoleInfoRoleSets struct {
	AdditionalRoles []string `json:"additionalRoles"`
	PrimaryRole     *string  `json:"primaryRole"`
}

type AboutAdditionalRoleInfo struct {
	RoleSets []AboutAdditionalRoleInfoRoleSets `json:"roleSets"`
	Type     *string                           `json:"type"`
}

type AboutDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink"`
	ColorRgb            *string `json:"colorRgb"`
	ID                  *string `json:"id"`
}

type AboutExportFormats struct {
	Source  *string  `json:"source"`
	Targets []string `json:"targets"`
}

type AboutFeatures struct {
	FeatureName *string  `json:"featureName"`
	FeatureRate *float64 `json:"featureRate"`
}

type AboutImportFormats struct {
	Source  *string  `json:"source"`
	Targets []string `json:"targets"`
}

type AboutMaxUploadSizes struct {
	Size *string `json:"size"`
	Type *string `json:"type"`
}

type AboutQuotaBytesByService struct {
	BytesUsed   *string `json:"bytesUsed"`
	ServiceName *string `json:"serviceName"`
}

type AboutTeamDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink"`
	ColorRgb            *string `json:"colorRgb"`
	ID                  *string `json:"id"`
}

type About struct {
	AdditionalRoleInfo      []AboutAdditionalRoleInfo  `json:"additionalRoleInfo"`
	CanCreateDrives         *bool                      `json:"canCreateDrives"`
	CanCreateTeamDrives     *bool                      `json:"canCreateTeamDrives"`
	DomainSharingPolicy     *string                    `json:"domainSharingPolicy"`
	DriveThemes             []AboutDriveThemes         `json:"driveThemes"`
	Etag                    *string                    `json:"etag"`
	ExportFormats           []AboutExportFormats       `json:"exportFormats"`
	Features                []AboutFeatures            `json:"features"`
	FolderColorPalette      []string                   `json:"folderColorPalette"`
	ImportFormats           []AboutImportFormats       `json:"importFormats"`
	IsCurrentAppInstalled   *bool                      `json:"isCurrentAppInstalled"`
	Kind                    *string                    `json:"kind"`
	LanguageCode            *string                    `json:"languageCode"`
	LargestChangeID         *string                    `json:"largestChangeId"`
	MaxUploadSizes          []AboutMaxUploadSizes      `json:"maxUploadSizes"`
	Name                    *string                    `json:"name"`
	PermissionID            *string                    `json:"permissionId"`
	QuotaBytesByService     []AboutQuotaBytesByService `json:"quotaBytesByService"`
	QuotaBytesTotal         *string                    `json:"quotaBytesTotal"`
	QuotaBytesUsed          *string                    `json:"quotaBytesUsed"`
	QuotaBytesUsedAggregate *string                    `json:"quotaBytesUsedAggregate"`
	QuotaBytesUsedInTrash   *string                    `json:"quotaBytesUsedInTrash"`
	QuotaType               *string                    `json:"quotaType"`
	RemainingChangeIds      *string                    `json:"remainingChangeIds"`
	RootFolderID            *string                    `json:"rootFolderId"`
	SelfLink                *string                    `json:"selfLink"`
	TeamDriveThemes         []AboutTeamDriveThemes     `json:"teamDriveThemes"`
	User                    *User                      `json:"user"`
}
