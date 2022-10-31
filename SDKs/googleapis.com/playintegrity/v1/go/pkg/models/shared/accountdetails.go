package shared

type AccountDetailsAppLicensingVerdictEnum string

const (
	AccountDetailsAppLicensingVerdictEnumUnknown     AccountDetailsAppLicensingVerdictEnum = "UNKNOWN"
	AccountDetailsAppLicensingVerdictEnumLicensed    AccountDetailsAppLicensingVerdictEnum = "LICENSED"
	AccountDetailsAppLicensingVerdictEnumUnlicensed  AccountDetailsAppLicensingVerdictEnum = "UNLICENSED"
	AccountDetailsAppLicensingVerdictEnumUnevaluated AccountDetailsAppLicensingVerdictEnum = "UNEVALUATED"
)

type AccountDetails struct {
	AccountActivity     *AccountActivity                       `json:"accountActivity,omitempty"`
	AccountRiskVerdict  *AccountRiskVerdict                    `json:"accountRiskVerdict,omitempty"`
	AppLicensingVerdict *AccountDetailsAppLicensingVerdictEnum `json:"appLicensingVerdict,omitempty"`
}
