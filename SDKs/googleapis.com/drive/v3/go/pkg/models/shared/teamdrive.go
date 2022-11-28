package shared

import (
	"time"
)

// TeamDriveBackgroundImageFile
// An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
type TeamDriveBackgroundImageFile struct {
	ID          *string  `json:"id,omitempty"`
	Width       *float32 `json:"width,omitempty"`
	XCoordinate *float32 `json:"xCoordinate,omitempty"`
	YCoordinate *float32 `json:"yCoordinate,omitempty"`
}

// TeamDriveCapabilities
// Capabilities the current user has on this Team Drive.
type TeamDriveCapabilities struct {
	CanAddChildren                                   *bool `json:"canAddChildren,omitempty"`
	CanChangeCopyRequiresWriterPermissionRestriction *bool `json:"canChangeCopyRequiresWriterPermissionRestriction,omitempty"`
	CanChangeDomainUsersOnlyRestriction              *bool `json:"canChangeDomainUsersOnlyRestriction,omitempty"`
	CanChangeTeamDriveBackground                     *bool `json:"canChangeTeamDriveBackground,omitempty"`
	CanChangeTeamMembersOnlyRestriction              *bool `json:"canChangeTeamMembersOnlyRestriction,omitempty"`
	CanComment                                       *bool `json:"canComment,omitempty"`
	CanCopy                                          *bool `json:"canCopy,omitempty"`
	CanDeleteChildren                                *bool `json:"canDeleteChildren,omitempty"`
	CanDeleteTeamDrive                               *bool `json:"canDeleteTeamDrive,omitempty"`
	CanDownload                                      *bool `json:"canDownload,omitempty"`
	CanEdit                                          *bool `json:"canEdit,omitempty"`
	CanListChildren                                  *bool `json:"canListChildren,omitempty"`
	CanManageMembers                                 *bool `json:"canManageMembers,omitempty"`
	CanReadRevisions                                 *bool `json:"canReadRevisions,omitempty"`
	CanRemoveChildren                                *bool `json:"canRemoveChildren,omitempty"`
	CanRename                                        *bool `json:"canRename,omitempty"`
	CanRenameTeamDrive                               *bool `json:"canRenameTeamDrive,omitempty"`
	CanResetTeamDriveRestrictions                    *bool `json:"canResetTeamDriveRestrictions,omitempty"`
	CanShare                                         *bool `json:"canShare,omitempty"`
	CanTrashChildren                                 *bool `json:"canTrashChildren,omitempty"`
}

// TeamDriveRestrictions
// A set of restrictions that apply to this Team Drive or items inside this Team Drive.
type TeamDriveRestrictions struct {
	AdminManagedRestrictions     *bool `json:"adminManagedRestrictions,omitempty"`
	CopyRequiresWriterPermission *bool `json:"copyRequiresWriterPermission,omitempty"`
	DomainUsersOnly              *bool `json:"domainUsersOnly,omitempty"`
	TeamMembersOnly              *bool `json:"teamMembersOnly,omitempty"`
}

// TeamDrive
// Deprecated: use the drive collection instead.
type TeamDrive struct {
	BackgroundImageFile *TeamDriveBackgroundImageFile `json:"backgroundImageFile,omitempty"`
	BackgroundImageLink *string                       `json:"backgroundImageLink,omitempty"`
	Capabilities        *TeamDriveCapabilities        `json:"capabilities,omitempty"`
	ColorRgb            *string                       `json:"colorRgb,omitempty"`
	CreatedTime         *time.Time                    `json:"createdTime,omitempty"`
	ID                  *string                       `json:"id,omitempty"`
	Kind                *string                       `json:"kind,omitempty"`
	Name                *string                       `json:"name,omitempty"`
	OrgUnitID           *string                       `json:"orgUnitId,omitempty"`
	Restrictions        *TeamDriveRestrictions        `json:"restrictions,omitempty"`
	ThemeID             *string                       `json:"themeId,omitempty"`
}
