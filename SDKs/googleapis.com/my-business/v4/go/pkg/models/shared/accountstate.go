package shared

type AccountStateStatusEnum string

const (
	AccountStateStatusEnumAccountStatusUnspecified AccountStateStatusEnum = "ACCOUNT_STATUS_UNSPECIFIED"
	AccountStateStatusEnumVerified                 AccountStateStatusEnum = "VERIFIED"
	AccountStateStatusEnumUnverified               AccountStateStatusEnum = "UNVERIFIED"
	AccountStateStatusEnumVerificationRequested    AccountStateStatusEnum = "VERIFICATION_REQUESTED"
)

type AccountState struct {
	Status *AccountStateStatusEnum `json:"status,omitempty"`
}
