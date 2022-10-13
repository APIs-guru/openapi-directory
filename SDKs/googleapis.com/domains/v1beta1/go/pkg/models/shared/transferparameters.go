package shared

type TransferParametersSupportedPrivacyEnum string

const (
	TransferParametersSupportedPrivacyEnumContactPrivacyUnspecified TransferParametersSupportedPrivacyEnum = "CONTACT_PRIVACY_UNSPECIFIED"
	TransferParametersSupportedPrivacyEnumPublicContactData         TransferParametersSupportedPrivacyEnum = "PUBLIC_CONTACT_DATA"
	TransferParametersSupportedPrivacyEnumPrivateContactData        TransferParametersSupportedPrivacyEnum = "PRIVATE_CONTACT_DATA"
	TransferParametersSupportedPrivacyEnumRedactedContactData       TransferParametersSupportedPrivacyEnum = "REDACTED_CONTACT_DATA"
)

type TransferParametersTransferLockStateEnum string

const (
	TransferParametersTransferLockStateEnumTransferLockStateUnspecified TransferParametersTransferLockStateEnum = "TRANSFER_LOCK_STATE_UNSPECIFIED"
	TransferParametersTransferLockStateEnumUnlocked                     TransferParametersTransferLockStateEnum = "UNLOCKED"
	TransferParametersTransferLockStateEnumLocked                       TransferParametersTransferLockStateEnum = "LOCKED"
)

type TransferParameters struct {
	CurrentRegistrar    *string                                  `json:"currentRegistrar"`
	CurrentRegistrarURI *string                                  `json:"currentRegistrarUri"`
	DomainName          *string                                  `json:"domainName"`
	NameServers         []string                                 `json:"nameServers"`
	SupportedPrivacy    []TransferParametersSupportedPrivacyEnum `json:"supportedPrivacy"`
	TransferLockState   *TransferParametersTransferLockStateEnum `json:"transferLockState"`
	YearlyPrice         *Money                                   `json:"yearlyPrice"`
}
