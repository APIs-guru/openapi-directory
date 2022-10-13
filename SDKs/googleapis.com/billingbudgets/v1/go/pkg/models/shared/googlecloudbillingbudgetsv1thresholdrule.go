package shared

type GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum string

const (
	GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumBasisUnspecified GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum = "BASIS_UNSPECIFIED"
	GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumCurrentSpend     GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum = "CURRENT_SPEND"
	GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumForecastedSpend  GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum = "FORECASTED_SPEND"
)

type GoogleCloudBillingBudgetsV1ThresholdRule struct {
	SpendBasis       *GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum `json:"spendBasis"`
	ThresholdPercent *float64                                                `json:"thresholdPercent"`
}
