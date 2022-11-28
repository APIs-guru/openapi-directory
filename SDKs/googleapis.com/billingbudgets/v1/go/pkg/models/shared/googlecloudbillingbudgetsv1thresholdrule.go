package shared

type GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum string

const (
	GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumBasisUnspecified GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum = "BASIS_UNSPECIFIED"
	GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumCurrentSpend     GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum = "CURRENT_SPEND"
	GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumForecastedSpend  GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum = "FORECASTED_SPEND"
)

// GoogleCloudBillingBudgetsV1ThresholdRule
// ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).
type GoogleCloudBillingBudgetsV1ThresholdRule struct {
	SpendBasis       *GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum `json:"spendBasis,omitempty"`
	ThresholdPercent *float64                                                `json:"thresholdPercent,omitempty"`
}
