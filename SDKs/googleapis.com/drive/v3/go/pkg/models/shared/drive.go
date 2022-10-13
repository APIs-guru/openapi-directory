package shared

import (
	"time"
)

type DriveBackgroundImageFile struct {
	ID          *string  `json:"id"`
	Width       *float32 `json:"width"`
	XCoordinate *float32 `json:"xCoordinate"`
	YCoordinate *float32 `json:"yCoordinate"`
}

type DriveCapabilities struct {
	CanAddChildren                                   *bool `json:"canAddChildren"`
	CanChangeCopyRequiresWriterPermissionRestriction *bool `json:"canChangeCopyRequiresWriterPermissionRestriction"`
	CanChangeDomainUsersOnlyRestriction              *bool `json:"canChangeDomainUsersOnlyRestriction"`
	CanChangeDriveBackground                         *bool `json:"canChangeDriveBackground"`
	CanChangeDriveMembersOnlyRestriction             *bool `json:"canChangeDriveMembersOnlyRestriction"`
	CanComment                                       *bool `json:"canComment"`
	CanCopy                                          *bool `json:"canCopy"`
	CanDeleteChildren                                *bool `json:"canDeleteChildren"`
	CanDeleteDrive                                   *bool `json:"canDeleteDrive"`
	CanDownload                                      *bool `json:"canDownload"`
	CanEdit                                          *bool `json:"canEdit"`
	CanListChildren                                  *bool `json:"canListChildren"`
	CanManageMembers                                 *bool `json:"canManageMembers"`
	CanReadRevisions                                 *bool `json:"canReadRevisions"`
	CanRename                                        *bool `json:"canRename"`
	CanRenameDrive                                   *bool `json:"canRenameDrive"`
	CanResetDriveRestrictions                        *bool `json:"canResetDriveRestrictions"`
	CanShare                                         *bool `json:"canShare"`
	CanTrashChildren                                 *bool `json:"canTrashChildren"`
}

type DriveRestrictions struct {
	AdminManagedRestrictions     *bool `json:"adminManagedRestrictions"`
	CopyRequiresWriterPermission *bool `json:"copyRequiresWriterPermission"`
	DomainUsersOnly              *bool `json:"domainUsersOnly"`
	DriveMembersOnly             *bool `json:"driveMembersOnly"`
}

type Drive struct {
	BackgroundImageFile *DriveBackgroundImageFile `json:"backgroundImageFile"`
	BackgroundImageLink *string                   `json:"backgroundImageLink"`
	Capabilities        *DriveCapabilities        `json:"capabilities"`
	ColorRgb            *string                   `json:"colorRgb"`
	CreatedTime         *time.Time                `json:"createdTime"`
	Hidden              *bool                     `json:"hidden"`
	ID                  *string                   `json:"id"`
	Kind                *string                   `json:"kind"`
	Name                *string                   `json:"name"`
	OrgUnitID           *string                   `json:"orgUnitId"`
	Restrictions        *DriveRestrictions        `json:"restrictions"`
	ThemeID             *string                   `json:"themeId"`
}
