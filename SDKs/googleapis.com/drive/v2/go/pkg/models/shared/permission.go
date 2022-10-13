package shared

import (
	"time"
)

type PermissionPermissionDetails struct {
	AdditionalRoles []string `json:"additionalRoles"`
	Inherited       *bool    `json:"inherited"`
	InheritedFrom   *string  `json:"inheritedFrom"`
	PermissionType  *string  `json:"permissionType"`
	Role            *string  `json:"role"`
}

type PermissionTeamDrivePermissionDetails struct {
	AdditionalRoles         []string `json:"additionalRoles"`
	Inherited               *bool    `json:"inherited"`
	InheritedFrom           *string  `json:"inheritedFrom"`
	Role                    *string  `json:"role"`
	TeamDrivePermissionType *string  `json:"teamDrivePermissionType"`
}

type Permission struct {
	AdditionalRoles            []string                               `json:"additionalRoles"`
	AuthKey                    *string                                `json:"authKey"`
	Deleted                    *bool                                  `json:"deleted"`
	Domain                     *string                                `json:"domain"`
	EmailAddress               *string                                `json:"emailAddress"`
	Etag                       *string                                `json:"etag"`
	ExpirationDate             *time.Time                             `json:"expirationDate"`
	ID                         *string                                `json:"id"`
	Kind                       *string                                `json:"kind"`
	Name                       *string                                `json:"name"`
	PendingOwner               *bool                                  `json:"pendingOwner"`
	PermissionDetails          []PermissionPermissionDetails          `json:"permissionDetails"`
	PhotoLink                  *string                                `json:"photoLink"`
	Role                       *string                                `json:"role"`
	SelfLink                   *string                                `json:"selfLink"`
	TeamDrivePermissionDetails []PermissionTeamDrivePermissionDetails `json:"teamDrivePermissionDetails"`
	Type                       *string                                `json:"type"`
	Value                      *string                                `json:"value"`
	View                       *string                                `json:"view"`
	WithLink                   *bool                                  `json:"withLink"`
}
