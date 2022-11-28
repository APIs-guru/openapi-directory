package shared

type AccountDetailsAppLicensingVerdictEnum string

const (
	AccountDetailsAppLicensingVerdictEnumUnknown     AccountDetailsAppLicensingVerdictEnum = "UNKNOWN"
	AccountDetailsAppLicensingVerdictEnumLicensed    AccountDetailsAppLicensingVerdictEnum = "LICENSED"
	AccountDetailsAppLicensingVerdictEnumUnlicensed  AccountDetailsAppLicensingVerdictEnum = "UNLICENSED"
	AccountDetailsAppLicensingVerdictEnumUnevaluated AccountDetailsAppLicensingVerdictEnum = "UNEVALUATED"
)

// AccountDetails
// Contains the account information such as the licensing status for the user in the scope.
type AccountDetails struct {
	AccountActivity     *AccountActivity                       `json:"accountActivity,omitempty"`
	AppLicensingVerdict *AccountDetailsAppLicensingVerdictEnum `json:"appLicensingVerdict,omitempty"`
}
