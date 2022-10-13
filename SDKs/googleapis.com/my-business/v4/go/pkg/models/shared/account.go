package shared

type AccountPermissionLevelEnum string

const (
	AccountPermissionLevelEnumPermissionLevelUnspecified AccountPermissionLevelEnum = "PERMISSION_LEVEL_UNSPECIFIED"
	AccountPermissionLevelEnumOwnerLevel                 AccountPermissionLevelEnum = "OWNER_LEVEL"
	AccountPermissionLevelEnumMemberLevel                AccountPermissionLevelEnum = "MEMBER_LEVEL"
)

type AccountRoleEnum string

const (
	AccountRoleEnumAccountRoleUnspecified AccountRoleEnum = "ACCOUNT_ROLE_UNSPECIFIED"
	AccountRoleEnumOwner                  AccountRoleEnum = "OWNER"
	AccountRoleEnumCoOwner                AccountRoleEnum = "CO_OWNER"
	AccountRoleEnumManager                AccountRoleEnum = "MANAGER"
	AccountRoleEnumCommunityManager       AccountRoleEnum = "COMMUNITY_MANAGER"
)

type AccountTypeEnum string

const (
	AccountTypeEnumAccountTypeUnspecified AccountTypeEnum = "ACCOUNT_TYPE_UNSPECIFIED"
	AccountTypeEnumPersonal               AccountTypeEnum = "PERSONAL"
	AccountTypeEnumLocationGroup          AccountTypeEnum = "LOCATION_GROUP"
	AccountTypeEnumUserGroup              AccountTypeEnum = "USER_GROUP"
	AccountTypeEnumOrganization           AccountTypeEnum = "ORGANIZATION"
)

type Account struct {
	AccountName      *string                     `json:"accountName"`
	AccountNumber    *string                     `json:"accountNumber"`
	Name             *string                     `json:"name"`
	OrganizationInfo *OrganizationInfo           `json:"organizationInfo"`
	PermissionLevel  *AccountPermissionLevelEnum `json:"permissionLevel"`
	Role             *AccountRoleEnum            `json:"role"`
	State            *AccountState               `json:"state"`
	Type             *AccountTypeEnum            `json:"type"`
}
