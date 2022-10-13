package shared

type QuotaOperationQuotaModeEnum string

const (
	QuotaOperationQuotaModeEnumUnspecified QuotaOperationQuotaModeEnum = "UNSPECIFIED"
	QuotaOperationQuotaModeEnumNormal      QuotaOperationQuotaModeEnum = "NORMAL"
	QuotaOperationQuotaModeEnumBestEffort  QuotaOperationQuotaModeEnum = "BEST_EFFORT"
	QuotaOperationQuotaModeEnumCheckOnly   QuotaOperationQuotaModeEnum = "CHECK_ONLY"
	QuotaOperationQuotaModeEnumAdjustOnly  QuotaOperationQuotaModeEnum = "ADJUST_ONLY"
)

type QuotaOperation struct {
	ConsumerID   *string                      `json:"consumerId"`
	Labels       map[string]string            `json:"labels"`
	MethodName   *string                      `json:"methodName"`
	OperationID  *string                      `json:"operationId"`
	QuotaMetrics []MetricValueSet             `json:"quotaMetrics"`
	QuotaMode    *QuotaOperationQuotaModeEnum `json:"quotaMode"`
}
