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

// TransferParameters
// Parameters required to transfer a domain from another registrar.
type TransferParameters struct {
	CurrentRegistrar    *string                                  `json:"currentRegistrar,omitempty"`
	CurrentRegistrarURI *string                                  `json:"currentRegistrarUri,omitempty"`
	DomainName          *string                                  `json:"domainName,omitempty"`
	NameServers         []string                                 `json:"nameServers,omitempty"`
	SupportedPrivacy    []TransferParametersSupportedPrivacyEnum `json:"supportedPrivacy,omitempty"`
	TransferLockState   *TransferParametersTransferLockStateEnum `json:"transferLockState,omitempty"`
	YearlyPrice         *Money                                   `json:"yearlyPrice,omitempty"`
}
