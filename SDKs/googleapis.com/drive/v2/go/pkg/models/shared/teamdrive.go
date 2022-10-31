package shared

import (
	"time"
)

type TeamDriveBackgroundImageFile struct {
	ID          *string  `json:"id,omitempty"`
	Width       *float32 `json:"width,omitempty"`
	XCoordinate *float32 `json:"xCoordinate,omitempty"`
	YCoordinate *float32 `json:"yCoordinate,omitempty"`
}

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

type TeamDriveRestrictions struct {
	AdminManagedRestrictions     *bool `json:"adminManagedRestrictions,omitempty"`
	CopyRequiresWriterPermission *bool `json:"copyRequiresWriterPermission,omitempty"`
	DomainUsersOnly              *bool `json:"domainUsersOnly,omitempty"`
	TeamMembersOnly              *bool `json:"teamMembersOnly,omitempty"`
}

type TeamDrive struct {
	BackgroundImageFile *TeamDriveBackgroundImageFile `json:"backgroundImageFile,omitempty"`
	BackgroundImageLink *string                       `json:"backgroundImageLink,omitempty"`
	Capabilities        *TeamDriveCapabilities        `json:"capabilities,omitempty"`
	ColorRgb            *string                       `json:"colorRgb,omitempty"`
	CreatedDate         *time.Time                    `json:"createdDate,omitempty"`
	ID                  *string                       `json:"id,omitempty"`
	Kind                *string                       `json:"kind,omitempty"`
	Name                *string                       `json:"name,omitempty"`
	OrgUnitID           *string                       `json:"orgUnitId,omitempty"`
	Restrictions        *TeamDriveRestrictions        `json:"restrictions,omitempty"`
	ThemeID             *string                       `json:"themeId,omitempty"`
}
