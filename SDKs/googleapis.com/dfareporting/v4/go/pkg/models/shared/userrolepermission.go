package shared

type UserRolePermissionAvailabilityEnum string

const (
	UserRolePermissionAvailabilityEnumNotAvailableByDefault         UserRolePermissionAvailabilityEnum = "NOT_AVAILABLE_BY_DEFAULT"
	UserRolePermissionAvailabilityEnumAccountByDefault              UserRolePermissionAvailabilityEnum = "ACCOUNT_BY_DEFAULT"
	UserRolePermissionAvailabilityEnumSubaccountAndAccountByDefault UserRolePermissionAvailabilityEnum = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT"
	UserRolePermissionAvailabilityEnumAccountAlways                 UserRolePermissionAvailabilityEnum = "ACCOUNT_ALWAYS"
	UserRolePermissionAvailabilityEnumSubaccountAndAccountAlways    UserRolePermissionAvailabilityEnum = "SUBACCOUNT_AND_ACCOUNT_ALWAYS"
	UserRolePermissionAvailabilityEnumUserProfileOnly               UserRolePermissionAvailabilityEnum = "USER_PROFILE_ONLY"
)

type UserRolePermission struct {
	Availability      *UserRolePermissionAvailabilityEnum `json:"availability,omitempty"`
	ID                *string                             `json:"id,omitempty"`
	Kind              *string                             `json:"kind,omitempty"`
	Name              *string                             `json:"name,omitempty"`
	PermissionGroupID *string                             `json:"permissionGroupId,omitempty"`
}
