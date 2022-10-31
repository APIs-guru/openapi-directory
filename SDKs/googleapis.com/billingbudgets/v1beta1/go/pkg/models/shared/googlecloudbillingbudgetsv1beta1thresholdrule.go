package shared




type GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum string

const (
    GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumBasisUnspecified GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum = "BASIS_UNSPECIFIED"
GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumCurrentSpend GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum = "CURRENT_SPEND"
GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumForecastedSpend GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum = "FORECASTED_SPEND"
)


type GoogleCloudBillingBudgetsV1beta1ThresholdRule struct {
    SpendBasis *GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum `json:"spendBasis,omitempty"`
    ThresholdPercent *float64 `json:"thresholdPercent,omitempty"`
    
}

