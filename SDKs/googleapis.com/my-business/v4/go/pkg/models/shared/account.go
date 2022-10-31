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
	AccountName      *string                     `json:"accountName,omitempty"`
	AccountNumber    *string                     `json:"accountNumber,omitempty"`
	Name             *string                     `json:"name,omitempty"`
	OrganizationInfo *OrganizationInfo           `json:"organizationInfo,omitempty"`
	PermissionLevel  *AccountPermissionLevelEnum `json:"permissionLevel,omitempty"`
	Role             *AccountRoleEnum            `json:"role,omitempty"`
	State            *AccountState               `json:"state,omitempty"`
	Type             *AccountTypeEnum            `json:"type,omitempty"`
}
