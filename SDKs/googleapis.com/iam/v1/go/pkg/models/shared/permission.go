package shared

type PermissionCustomRolesSupportLevelEnum string

const (
	PermissionCustomRolesSupportLevelEnumSupported    PermissionCustomRolesSupportLevelEnum = "SUPPORTED"
	PermissionCustomRolesSupportLevelEnumTesting      PermissionCustomRolesSupportLevelEnum = "TESTING"
	PermissionCustomRolesSupportLevelEnumNotSupported PermissionCustomRolesSupportLevelEnum = "NOT_SUPPORTED"
)

type PermissionStageEnum string

const (
	PermissionStageEnumAlpha      PermissionStageEnum = "ALPHA"
	PermissionStageEnumBeta       PermissionStageEnum = "BETA"
	PermissionStageEnumGa         PermissionStageEnum = "GA"
	PermissionStageEnumDeprecated PermissionStageEnum = "DEPRECATED"
)

// Permission
// A permission which can be included by a role.
type Permission struct {
	APIDisabled             *bool                                  `json:"apiDisabled,omitempty"`
	CustomRolesSupportLevel *PermissionCustomRolesSupportLevelEnum `json:"customRolesSupportLevel,omitempty"`
	Description             *string                                `json:"description,omitempty"`
	Name                    *string                                `json:"name,omitempty"`
	OnlyInPredefinedRoles   *bool                                  `json:"onlyInPredefinedRoles,omitempty"`
	PrimaryPermission       *string                                `json:"primaryPermission,omitempty"`
	Stage                   *PermissionStageEnum                   `json:"stage,omitempty"`
	Title                   *string                                `json:"title,omitempty"`
}
