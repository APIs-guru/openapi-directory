package shared

type AboutAdditionalRoleInfoRoleSets struct {
	AdditionalRoles []string `json:"additionalRoles,omitempty"`
	PrimaryRole     *string  `json:"primaryRole,omitempty"`
}

type AboutAdditionalRoleInfo struct {
	RoleSets []AboutAdditionalRoleInfoRoleSets `json:"roleSets,omitempty"`
	Type     *string                           `json:"type,omitempty"`
}

type AboutDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink,omitempty"`
	ColorRgb            *string `json:"colorRgb,omitempty"`
	ID                  *string `json:"id,omitempty"`
}

type AboutExportFormats struct {
	Source  *string  `json:"source,omitempty"`
	Targets []string `json:"targets,omitempty"`
}

type AboutFeatures struct {
	FeatureName *string  `json:"featureName,omitempty"`
	FeatureRate *float64 `json:"featureRate,omitempty"`
}

type AboutImportFormats struct {
	Source  *string  `json:"source,omitempty"`
	Targets []string `json:"targets,omitempty"`
}

type AboutMaxUploadSizes struct {
	Size *string `json:"size,omitempty"`
	Type *string `json:"type,omitempty"`
}

type AboutQuotaBytesByService struct {
	BytesUsed   *string `json:"bytesUsed,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
}

type AboutTeamDriveThemes struct {
	BackgroundImageLink *string `json:"backgroundImageLink,omitempty"`
	ColorRgb            *string `json:"colorRgb,omitempty"`
	ID                  *string `json:"id,omitempty"`
}

// About
// An item with user information and settings.
type About struct {
	AdditionalRoleInfo      []AboutAdditionalRoleInfo  `json:"additionalRoleInfo,omitempty"`
	CanCreateDrives         *bool                      `json:"canCreateDrives,omitempty"`
	CanCreateTeamDrives     *bool                      `json:"canCreateTeamDrives,omitempty"`
	DomainSharingPolicy     *string                    `json:"domainSharingPolicy,omitempty"`
	DriveThemes             []AboutDriveThemes         `json:"driveThemes,omitempty"`
	Etag                    *string                    `json:"etag,omitempty"`
	ExportFormats           []AboutExportFormats       `json:"exportFormats,omitempty"`
	Features                []AboutFeatures            `json:"features,omitempty"`
	FolderColorPalette      []string                   `json:"folderColorPalette,omitempty"`
	ImportFormats           []AboutImportFormats       `json:"importFormats,omitempty"`
	IsCurrentAppInstalled   *bool                      `json:"isCurrentAppInstalled,omitempty"`
	Kind                    *string                    `json:"kind,omitempty"`
	LanguageCode            *string                    `json:"languageCode,omitempty"`
	LargestChangeID         *string                    `json:"largestChangeId,omitempty"`
	MaxUploadSizes          []AboutMaxUploadSizes      `json:"maxUploadSizes,omitempty"`
	Name                    *string                    `json:"name,omitempty"`
	PermissionID            *string                    `json:"permissionId,omitempty"`
	QuotaBytesByService     []AboutQuotaBytesByService `json:"quotaBytesByService,omitempty"`
	QuotaBytesTotal         *string                    `json:"quotaBytesTotal,omitempty"`
	QuotaBytesUsed          *string                    `json:"quotaBytesUsed,omitempty"`
	QuotaBytesUsedAggregate *string                    `json:"quotaBytesUsedAggregate,omitempty"`
	QuotaBytesUsedInTrash   *string                    `json:"quotaBytesUsedInTrash,omitempty"`
	QuotaType               *string                    `json:"quotaType,omitempty"`
	RemainingChangeIds      *string                    `json:"remainingChangeIds,omitempty"`
	RootFolderID            *string                    `json:"rootFolderId,omitempty"`
	SelfLink                *string                    `json:"selfLink,omitempty"`
	TeamDriveThemes         []AboutTeamDriveThemes     `json:"teamDriveThemes,omitempty"`
	User                    *User                      `json:"user,omitempty"`
}
