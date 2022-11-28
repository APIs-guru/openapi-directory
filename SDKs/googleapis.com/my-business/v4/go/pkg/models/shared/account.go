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

// Account
// An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
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
