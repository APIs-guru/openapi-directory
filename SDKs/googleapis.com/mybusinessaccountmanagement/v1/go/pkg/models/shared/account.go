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
	AccountRoleEnumPrimaryOwner           AccountRoleEnum = "PRIMARY_OWNER"
	AccountRoleEnumOwner                  AccountRoleEnum = "OWNER"
	AccountRoleEnumManager                AccountRoleEnum = "MANAGER"
	AccountRoleEnumSiteManager            AccountRoleEnum = "SITE_MANAGER"
)

type AccountTypeEnum string

const (
	AccountTypeEnumAccountTypeUnspecified AccountTypeEnum = "ACCOUNT_TYPE_UNSPECIFIED"
	AccountTypeEnumPersonal               AccountTypeEnum = "PERSONAL"
	AccountTypeEnumLocationGroup          AccountTypeEnum = "LOCATION_GROUP"
	AccountTypeEnumUserGroup              AccountTypeEnum = "USER_GROUP"
	AccountTypeEnumOrganization           AccountTypeEnum = "ORGANIZATION"
)

type AccountVerificationStateEnum string

const (
	AccountVerificationStateEnumVerificationStateUnspecified AccountVerificationStateEnum = "VERIFICATION_STATE_UNSPECIFIED"
	AccountVerificationStateEnumVerified                     AccountVerificationStateEnum = "VERIFIED"
	AccountVerificationStateEnumUnverified                   AccountVerificationStateEnum = "UNVERIFIED"
	AccountVerificationStateEnumVerificationRequested        AccountVerificationStateEnum = "VERIFICATION_REQUESTED"
)

type AccountVettedStateEnum string

const (
	AccountVettedStateEnumVettedStateUnspecified AccountVettedStateEnum = "VETTED_STATE_UNSPECIFIED"
	AccountVettedStateEnumNotVetted              AccountVettedStateEnum = "NOT_VETTED"
	AccountVettedStateEnumVetted                 AccountVettedStateEnum = "VETTED"
	AccountVettedStateEnumInvalid                AccountVettedStateEnum = "INVALID"
)

type Account struct {
	AccountName       *string                       `json:"accountName"`
	AccountNumber     *string                       `json:"accountNumber"`
	Name              *string                       `json:"name"`
	OrganizationInfo  *OrganizationInfo             `json:"organizationInfo"`
	PermissionLevel   *AccountPermissionLevelEnum   `json:"permissionLevel"`
	PrimaryOwner      *string                       `json:"primaryOwner"`
	Role              *AccountRoleEnum              `json:"role"`
	Type              *AccountTypeEnum              `json:"type"`
	VerificationState *AccountVerificationStateEnum `json:"verificationState"`
	VettedState       *AccountVettedStateEnum       `json:"vettedState"`
}
