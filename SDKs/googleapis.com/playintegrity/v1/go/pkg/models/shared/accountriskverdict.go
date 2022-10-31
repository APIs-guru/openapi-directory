package shared

type AccountRiskVerdictRiskEnum string

const (
	AccountRiskVerdictRiskEnumRiskUnspecified AccountRiskVerdictRiskEnum = "RISK_UNSPECIFIED"
	AccountRiskVerdictRiskEnumUnevaluated     AccountRiskVerdictRiskEnum = "UNEVALUATED"
	AccountRiskVerdictRiskEnumHigher          AccountRiskVerdictRiskEnum = "HIGHER"
	AccountRiskVerdictRiskEnumUnknown         AccountRiskVerdictRiskEnum = "UNKNOWN"
	AccountRiskVerdictRiskEnumLower           AccountRiskVerdictRiskEnum = "LOWER"
	AccountRiskVerdictRiskEnumLowest          AccountRiskVerdictRiskEnum = "LOWEST"
)

type AccountRiskVerdictRiskLevelEnum string

const (
	AccountRiskVerdictRiskLevelEnumRiskLevelUnspecified AccountRiskVerdictRiskLevelEnum = "RISK_LEVEL_UNSPECIFIED"
	AccountRiskVerdictRiskLevelEnumRiskLevelUnevaluated AccountRiskVerdictRiskLevelEnum = "RISK_LEVEL_UNEVALUATED"
	AccountRiskVerdictRiskLevelEnumRiskLevelRisk        AccountRiskVerdictRiskLevelEnum = "RISK_LEVEL_RISK"
	AccountRiskVerdictRiskLevelEnumRiskLevelUnknown     AccountRiskVerdictRiskLevelEnum = "RISK_LEVEL_UNKNOWN"
	AccountRiskVerdictRiskLevelEnumRiskLevelLowRisk     AccountRiskVerdictRiskLevelEnum = "RISK_LEVEL_LOW_RISK"
	AccountRiskVerdictRiskLevelEnumRiskLevelLowestRisk  AccountRiskVerdictRiskLevelEnum = "RISK_LEVEL_LOWEST_RISK"
)

type AccountRiskVerdict struct {
	Risk      *AccountRiskVerdictRiskEnum      `json:"risk,omitempty"`
	RiskLevel *AccountRiskVerdictRiskLevelEnum `json:"riskLevel,omitempty"`
}
