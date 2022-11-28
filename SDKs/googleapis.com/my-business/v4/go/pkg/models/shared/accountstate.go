package shared

type AccountStateStatusEnum string

const (
	AccountStateStatusEnumAccountStatusUnspecified AccountStateStatusEnum = "ACCOUNT_STATUS_UNSPECIFIED"
	AccountStateStatusEnumVerified                 AccountStateStatusEnum = "VERIFIED"
	AccountStateStatusEnumUnverified               AccountStateStatusEnum = "UNVERIFIED"
	AccountStateStatusEnumVerificationRequested    AccountStateStatusEnum = "VERIFICATION_REQUESTED"
)

// AccountState
// Indicates status of the account, such as whether the account has been verified by Google.
type AccountState struct {
	Status *AccountStateStatusEnum `json:"status,omitempty"`
}
