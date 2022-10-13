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
	Availability      *UserRolePermissionAvailabilityEnum `json:"availability"`
	ID                *string                             `json:"id"`
	Kind              *string                             `json:"kind"`
	Name              *string                             `json:"name"`
	PermissionGroupID *string                             `json:"permissionGroupId"`
}
