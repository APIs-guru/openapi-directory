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

// AccountPermission
// AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
type AccountPermission struct {
	AccountProfiles   []AccountPermissionAccountProfilesEnum `json:"accountProfiles,omitempty"`
	ID                *string                                `json:"id,omitempty"`
	Kind              *string                                `json:"kind,omitempty"`
	Level             *AccountPermissionLevelEnum            `json:"level,omitempty"`
	Name              *string                                `json:"name,omitempty"`
	PermissionGroupID *string                                `json:"permissionGroupId,omitempty"`
}
