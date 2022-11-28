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

// AccountInput
// An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
type AccountInput struct {
	AccountName      *string                `json:"accountName,omitempty"`
	Name             *string                `json:"name,omitempty"`
	OrganizationInfo *OrganizationInfoInput `json:"organizationInfo,omitempty"`
	PrimaryOwner     *string                `json:"primaryOwner,omitempty"`
	Type             *AccountTypeEnum       `json:"type,omitempty"`
}

// Account
// An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
type Account struct {
	AccountName       *string                       `json:"accountName,omitempty"`
	AccountNumber     *string                       `json:"accountNumber,omitempty"`
	Name              *string                       `json:"name,omitempty"`
	OrganizationInfo  *OrganizationInfo             `json:"organizationInfo,omitempty"`
	PermissionLevel   *AccountPermissionLevelEnum   `json:"permissionLevel,omitempty"`
	PrimaryOwner      *string                       `json:"primaryOwner,omitempty"`
	Role              *AccountRoleEnum              `json:"role,omitempty"`
	Type              *AccountTypeEnum              `json:"type,omitempty"`
	VerificationState *AccountVerificationStateEnum `json:"verificationState,omitempty"`
	VettedState       *AccountVettedStateEnum       `json:"vettedState,omitempty"`
}
