package shared

import (
	"time"
)

type TeamDriveBackgroundImageFile struct {
	ID          *string  `json:"id"`
	Width       *float32 `json:"width"`
	XCoordinate *float32 `json:"xCoordinate"`
	YCoordinate *float32 `json:"yCoordinate"`
}

type TeamDriveCapabilities struct {
	CanAddChildren                                   *bool `json:"canAddChildren"`
	CanChangeCopyRequiresWriterPermissionRestriction *bool `json:"canChangeCopyRequiresWriterPermissionRestriction"`
	CanChangeDomainUsersOnlyRestriction              *bool `json:"canChangeDomainUsersOnlyRestriction"`
	CanChangeTeamDriveBackground                     *bool `json:"canChangeTeamDriveBackground"`
	CanChangeTeamMembersOnlyRestriction              *bool `json:"canChangeTeamMembersOnlyRestriction"`
	CanComment                                       *bool `json:"canComment"`
	CanCopy                                          *bool `json:"canCopy"`
	CanDeleteChildren                                *bool `json:"canDeleteChildren"`
	CanDeleteTeamDrive                               *bool `json:"canDeleteTeamDrive"`
	CanDownload                                      *bool `json:"canDownload"`
	CanEdit                                          *bool `json:"canEdit"`
	CanListChildren                                  *bool `json:"canListChildren"`
	CanManageMembers                                 *bool `json:"canManageMembers"`
	CanReadRevisions                                 *bool `json:"canReadRevisions"`
	CanRemoveChildren                                *bool `json:"canRemoveChildren"`
	CanRename                                        *bool `json:"canRename"`
	CanRenameTeamDrive                               *bool `json:"canRenameTeamDrive"`
	CanResetTeamDriveRestrictions                    *bool `json:"canResetTeamDriveRestrictions"`
	CanShare                                         *bool `json:"canShare"`
	CanTrashChildren                                 *bool `json:"canTrashChildren"`
}

type TeamDriveRestrictions struct {
	AdminManagedRestrictions     *bool `json:"adminManagedRestrictions"`
	CopyRequiresWriterPermission *bool `json:"copyRequiresWriterPermission"`
	DomainUsersOnly              *bool `json:"domainUsersOnly"`
	TeamMembersOnly              *bool `json:"teamMembersOnly"`
}

type TeamDrive struct {
	BackgroundImageFile *TeamDriveBackgroundImageFile `json:"backgroundImageFile"`
	BackgroundImageLink *string                       `json:"backgroundImageLink"`
	Capabilities        *TeamDriveCapabilities        `json:"capabilities"`
	ColorRgb            *string                       `json:"colorRgb"`
	CreatedTime         *time.Time                    `json:"createdTime"`
	ID                  *string                       `json:"id"`
	Kind                *string                       `json:"kind"`
	Name                *string                       `json:"name"`
	OrgUnitID           *string                       `json:"orgUnitId"`
	Restrictions        *TeamDriveRestrictions        `json:"restrictions"`
	ThemeID             *string                       `json:"themeId"`
}
