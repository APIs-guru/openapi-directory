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

type Permission struct {
	APIDisabled             *bool                                  `json:"apiDisabled"`
	CustomRolesSupportLevel *PermissionCustomRolesSupportLevelEnum `json:"customRolesSupportLevel"`
	Description             *string                                `json:"description"`
	Name                    *string                                `json:"name"`
	OnlyInPredefinedRoles   *bool                                  `json:"onlyInPredefinedRoles"`
	PrimaryPermission       *string                                `json:"primaryPermission"`
	Stage                   *PermissionStageEnum                   `json:"stage"`
	Title                   *string                                `json:"title"`
}
