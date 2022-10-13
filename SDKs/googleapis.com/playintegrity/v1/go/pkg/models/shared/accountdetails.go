package shared

type AccountDetailsAppLicensingVerdictEnum string

const (
	AccountDetailsAppLicensingVerdictEnumUnknown     AccountDetailsAppLicensingVerdictEnum = "UNKNOWN"
	AccountDetailsAppLicensingVerdictEnumLicensed    AccountDetailsAppLicensingVerdictEnum = "LICENSED"
	AccountDetailsAppLicensingVerdictEnumUnlicensed  AccountDetailsAppLicensingVerdictEnum = "UNLICENSED"
	AccountDetailsAppLicensingVerdictEnumUnevaluated AccountDetailsAppLicensingVerdictEnum = "UNEVALUATED"
)

type AccountDetails struct {
	AccountActivity     *AccountActivity                       `json:"accountActivity"`
	AccountRiskVerdict  *AccountRiskVerdict                    `json:"accountRiskVerdict"`
	AppLicensingVerdict *AccountDetailsAppLicensingVerdictEnum `json:"appLicensingVerdict"`
}
