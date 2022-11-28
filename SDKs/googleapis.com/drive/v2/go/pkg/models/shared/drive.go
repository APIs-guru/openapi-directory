package shared

import (
	"time"
)

// DriveBackgroundImageFile
// An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
type DriveBackgroundImageFile struct {
	ID          *string  `json:"id,omitempty"`
	Width       *float32 `json:"width,omitempty"`
	XCoordinate *float32 `json:"xCoordinate,omitempty"`
	YCoordinate *float32 `json:"yCoordinate,omitempty"`
}

// DriveCapabilities
// Capabilities the current user has on this shared drive.
type DriveCapabilities struct {
	CanAddChildren                                   *bool `json:"canAddChildren,omitempty"`
	CanChangeCopyRequiresWriterPermissionRestriction *bool `json:"canChangeCopyRequiresWriterPermissionRestriction,omitempty"`
	CanChangeDomainUsersOnlyRestriction              *bool `json:"canChangeDomainUsersOnlyRestriction,omitempty"`
	CanChangeDriveBackground                         *bool `json:"canChangeDriveBackground,omitempty"`
	CanChangeDriveMembersOnlyRestriction             *bool `json:"canChangeDriveMembersOnlyRestriction,omitempty"`
	CanComment                                       *bool `json:"canComment,omitempty"`
	CanCopy                                          *bool `json:"canCopy,omitempty"`
	CanDeleteChildren                                *bool `json:"canDeleteChildren,omitempty"`
	CanDeleteDrive                                   *bool `json:"canDeleteDrive,omitempty"`
	CanDownload                                      *bool `json:"canDownload,omitempty"`
	CanEdit                                          *bool `json:"canEdit,omitempty"`
	CanListChildren                                  *bool `json:"canListChildren,omitempty"`
	CanManageMembers                                 *bool `json:"canManageMembers,omitempty"`
	CanReadRevisions                                 *bool `json:"canReadRevisions,omitempty"`
	CanRename                                        *bool `json:"canRename,omitempty"`
	CanRenameDrive                                   *bool `json:"canRenameDrive,omitempty"`
	CanResetDriveRestrictions                        *bool `json:"canResetDriveRestrictions,omitempty"`
	CanShare                                         *bool `json:"canShare,omitempty"`
	CanTrashChildren                                 *bool `json:"canTrashChildren,omitempty"`
}

// DriveRestrictions
// A set of restrictions that apply to this shared drive or items inside this shared drive.
type DriveRestrictions struct {
	AdminManagedRestrictions     *bool `json:"adminManagedRestrictions,omitempty"`
	CopyRequiresWriterPermission *bool `json:"copyRequiresWriterPermission,omitempty"`
	DomainUsersOnly              *bool `json:"domainUsersOnly,omitempty"`
	DriveMembersOnly             *bool `json:"driveMembersOnly,omitempty"`
}

// Drive
// Representation of a shared drive.
type Drive struct {
	BackgroundImageFile *DriveBackgroundImageFile `json:"backgroundImageFile,omitempty"`
	BackgroundImageLink *string                   `json:"backgroundImageLink,omitempty"`
	Capabilities        *DriveCapabilities        `json:"capabilities,omitempty"`
	ColorRgb            *string                   `json:"colorRgb,omitempty"`
	CreatedDate         *time.Time                `json:"createdDate,omitempty"`
	Hidden              *bool                     `json:"hidden,omitempty"`
	ID                  *string                   `json:"id,omitempty"`
	Kind                *string                   `json:"kind,omitempty"`
	Name                *string                   `json:"name,omitempty"`
	OrgUnitID           *string                   `json:"orgUnitId,omitempty"`
	Restrictions        *DriveRestrictions        `json:"restrictions,omitempty"`
	ThemeID             *string                   `json:"themeId,omitempty"`
}
