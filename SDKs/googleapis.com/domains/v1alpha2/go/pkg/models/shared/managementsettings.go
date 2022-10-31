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

type ManagementSettings struct {
	RenewalMethod     *ManagementSettingsRenewalMethodEnum     `json:"renewalMethod,omitempty"`
	TransferLockState *ManagementSettingsTransferLockStateEnum `json:"transferLockState,omitempty"`
}
