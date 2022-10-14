package shared

import (
	"time"
)

type PermissionPermissionDetails struct {
	Inherited      *bool   `json:"inherited,omitempty"`
	InheritedFrom  *string `json:"inheritedFrom,omitempty"`
	PermissionType *string `json:"permissionType,omitempty"`
	Role           *string `json:"role,omitempty"`
}

type PermissionTeamDrivePermissionDetails struct {
	Inherited               *bool   `json:"inherited,omitempty"`
	InheritedFrom           *string `json:"inheritedFrom,omitempty"`
	Role                    *string `json:"role,omitempty"`
	TeamDrivePermissionType *string `json:"teamDrivePermissionType,omitempty"`
}

type Permission struct {
	AllowFileDiscovery         *bool                                  `json:"allowFileDiscovery,omitempty"`
	Deleted                    *bool                                  `json:"deleted,omitempty"`
	DisplayName                *string                                `json:"displayName,omitempty"`
	Domain                     *string                                `json:"domain,omitempty"`
	EmailAddress               *string                                `json:"emailAddress,omitempty"`
	ExpirationTime             *time.Time                             `json:"expirationTime,omitempty"`
	ID                         *string                                `json:"id,omitempty"`
	Kind                       *string                                `json:"kind,omitempty"`
	PendingOwner               *bool                                  `json:"pendingOwner,omitempty"`
	PermissionDetails          []PermissionPermissionDetails          `json:"permissionDetails,omitempty"`
	PhotoLink                  *string                                `json:"photoLink,omitempty"`
	Role                       *string                                `json:"role,omitempty"`
	TeamDrivePermissionDetails []PermissionTeamDrivePermissionDetails `json:"teamDrivePermissionDetails,omitempty"`
	Type                       *string                                `json:"type,omitempty"`
	View                       *string                                `json:"view,omitempty"`
}
