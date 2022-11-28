package shared

import (
	"time"
)

type PermissionPermissionDetails struct {
	AdditionalRoles []string `json:"additionalRoles,omitempty"`
	Inherited       *bool    `json:"inherited,omitempty"`
	InheritedFrom   *string  `json:"inheritedFrom,omitempty"`
	PermissionType  *string  `json:"permissionType,omitempty"`
	Role            *string  `json:"role,omitempty"`
}

type PermissionTeamDrivePermissionDetails struct {
	AdditionalRoles         []string `json:"additionalRoles,omitempty"`
	Inherited               *bool    `json:"inherited,omitempty"`
	InheritedFrom           *string  `json:"inheritedFrom,omitempty"`
	Role                    *string  `json:"role,omitempty"`
	TeamDrivePermissionType *string  `json:"teamDrivePermissionType,omitempty"`
}

// Permission
// A permission for a file.
type Permission struct {
	AdditionalRoles            []string                               `json:"additionalRoles,omitempty"`
	AuthKey                    *string                                `json:"authKey,omitempty"`
	Deleted                    *bool                                  `json:"deleted,omitempty"`
	Domain                     *string                                `json:"domain,omitempty"`
	EmailAddress               *string                                `json:"emailAddress,omitempty"`
	Etag                       *string                                `json:"etag,omitempty"`
	ExpirationDate             *time.Time                             `json:"expirationDate,omitempty"`
	ID                         *string                                `json:"id,omitempty"`
	Kind                       *string                                `json:"kind,omitempty"`
	Name                       *string                                `json:"name,omitempty"`
	PendingOwner               *bool                                  `json:"pendingOwner,omitempty"`
	PermissionDetails          []PermissionPermissionDetails          `json:"permissionDetails,omitempty"`
	PhotoLink                  *string                                `json:"photoLink,omitempty"`
	Role                       *string                                `json:"role,omitempty"`
	SelfLink                   *string                                `json:"selfLink,omitempty"`
	TeamDrivePermissionDetails []PermissionTeamDrivePermissionDetails `json:"teamDrivePermissionDetails,omitempty"`
	Type                       *string                                `json:"type,omitempty"`
	Value                      *string                                `json:"value,omitempty"`
	View                       *string                                `json:"view,omitempty"`
	WithLink                   *bool                                  `json:"withLink,omitempty"`
}

// PermissionInput
// A permission for a file.
type PermissionInput struct {
	AdditionalRoles []string   `json:"additionalRoles,omitempty"`
	AuthKey         *string    `json:"authKey,omitempty"`
	Deleted         *bool      `json:"deleted,omitempty"`
	Domain          *string    `json:"domain,omitempty"`
	EmailAddress    *string    `json:"emailAddress,omitempty"`
	Etag            *string    `json:"etag,omitempty"`
	ExpirationDate  *time.Time `json:"expirationDate,omitempty"`
	ID              *string    `json:"id,omitempty"`
	Kind            *string    `json:"kind,omitempty"`
	Name            *string    `json:"name,omitempty"`
	PendingOwner    *bool      `json:"pendingOwner,omitempty"`
	PhotoLink       *string    `json:"photoLink,omitempty"`
	Role            *string    `json:"role,omitempty"`
	SelfLink        *string    `json:"selfLink,omitempty"`
	Type            *string    `json:"type,omitempty"`
	Value           *string    `json:"value,omitempty"`
	View            *string    `json:"view,omitempty"`
	WithLink        *bool      `json:"withLink,omitempty"`
}
