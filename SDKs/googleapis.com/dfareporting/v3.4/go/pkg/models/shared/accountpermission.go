package shared

type AccountPermissionAccountProfilesEnum string

const (
	AccountPermissionAccountProfilesEnumAccountProfileBasic    AccountPermissionAccountProfilesEnum = "ACCOUNT_PROFILE_BASIC"
	AccountPermissionAccountProfilesEnumAccountProfileStandard AccountPermissionAccountProfilesEnum = "ACCOUNT_PROFILE_STANDARD"
)

type AccountPermissionLevelEnum string

const (
	AccountPermissionLevelEnumUser          AccountPermissionLevelEnum = "USER"
	AccountPermissionLevelEnumAdministrator AccountPermissionLevelEnum = "ADMINISTRATOR"
)

type AccountPermission struct {
	AccountProfiles   []AccountPermissionAccountProfilesEnum `json:"accountProfiles"`
	ID                *string                                `json:"id"`
	Kind              *string                                `json:"kind"`
	Level             *AccountPermissionLevelEnum            `json:"level"`
	Name              *string                                `json:"name"`
	PermissionGroupID *string                                `json:"permissionGroupId"`
}
