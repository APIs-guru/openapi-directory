package shared

import (
	"time"
)

type PermissionPermissionDetails struct {
	Inherited      *bool   `json:"inherited"`
	InheritedFrom  *string `json:"inheritedFrom"`
	PermissionType *string `json:"permissionType"`
	Role           *string `json:"role"`
}

type PermissionTeamDrivePermissionDetails struct {
	Inherited               *bool   `json:"inherited"`
	InheritedFrom           *string `json:"inheritedFrom"`
	Role                    *string `json:"role"`
	TeamDrivePermissionType *string `json:"teamDrivePermissionType"`
}

type Permission struct {
	AllowFileDiscovery         *bool                                  `json:"allowFileDiscovery"`
	Deleted                    *bool                                  `json:"deleted"`
	DisplayName                *string                                `json:"displayName"`
	Domain                     *string                                `json:"domain"`
	EmailAddress               *string                                `json:"emailAddress"`
	ExpirationTime             *time.Time                             `json:"expirationTime"`
	ID                         *string                                `json:"id"`
	Kind                       *string                                `json:"kind"`
	PendingOwner               *bool                                  `json:"pendingOwner"`
	PermissionDetails          []PermissionPermissionDetails          `json:"permissionDetails"`
	PhotoLink                  *string                                `json:"photoLink"`
	Role                       *string                                `json:"role"`
	TeamDrivePermissionDetails []PermissionTeamDrivePermissionDetails `json:"teamDrivePermissionDetails"`
	Type                       *string                                `json:"type"`
	View                       *string                                `json:"view"`
}
