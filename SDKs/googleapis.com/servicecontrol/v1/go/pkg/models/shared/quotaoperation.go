package shared

type QuotaOperationQuotaModeEnum string

const (
	QuotaOperationQuotaModeEnumUnspecified QuotaOperationQuotaModeEnum = "UNSPECIFIED"
	QuotaOperationQuotaModeEnumNormal      QuotaOperationQuotaModeEnum = "NORMAL"
	QuotaOperationQuotaModeEnumBestEffort  QuotaOperationQuotaModeEnum = "BEST_EFFORT"
	QuotaOperationQuotaModeEnumCheckOnly   QuotaOperationQuotaModeEnum = "CHECK_ONLY"
	QuotaOperationQuotaModeEnumAdjustOnly  QuotaOperationQuotaModeEnum = "ADJUST_ONLY"
)

// QuotaOperation
// Represents information regarding a quota operation.
type QuotaOperation struct {
	ConsumerID   *string                      `json:"consumerId,omitempty"`
	Labels       map[string]string            `json:"labels,omitempty"`
	MethodName   *string                      `json:"methodName,omitempty"`
	OperationID  *string                      `json:"operationId,omitempty"`
	QuotaMetrics []MetricValueSet             `json:"quotaMetrics,omitempty"`
	QuotaMode    *QuotaOperationQuotaModeEnum `json:"quotaMode,omitempty"`
}
