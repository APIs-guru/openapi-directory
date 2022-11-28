package shared

type ManagementSettingsRenewalMethodEnum string

const (
	ManagementSettingsRenewalMethodEnumRenewalMethodUnspecified ManagementSettingsRenewalMethodEnum = "RENEWAL_METHOD_UNSPECIFIED"
	ManagementSettingsRenewalMethodEnumAutomaticRenewal         ManagementSettingsRenewalMethodEnum = "AUTOMATIC_RENEWAL"
	ManagementSettingsRenewalMethodEnumManualRenewal            ManagementSettingsRenewalMethodEnum = "MANUAL_RENEWAL"
)

type ManagementSettingsTransferLockStateEnum string

const (
	ManagementSettingsTransferLockStateEnumTransferLockStateUnspecified ManagementSettingsTransferLockStateEnum = "TRANSFER_LOCK_STATE_UNSPECIFIED"
	ManagementSettingsTransferLockStateEnumUnlocked                     ManagementSettingsTransferLockStateEnum = "UNLOCKED"
	ManagementSettingsTransferLockStateEnumLocked                       ManagementSettingsTransferLockStateEnum = "LOCKED"
)

// ManagementSettingsInput
// Defines renewal, billing, and transfer settings for a `Registration`.
type ManagementSettingsInput struct {
	TransferLockState *ManagementSettingsTransferLockStateEnum `json:"transferLockState,omitempty"`
}

// ManagementSettings
// Defines renewal, billing, and transfer settings for a `Registration`.
type ManagementSettings struct {
	RenewalMethod     *ManagementSettingsRenewalMethodEnum     `json:"renewalMethod,omitempty"`
	TransferLockState *ManagementSettingsTransferLockStateEnum `json:"transferLockState,omitempty"`
}
