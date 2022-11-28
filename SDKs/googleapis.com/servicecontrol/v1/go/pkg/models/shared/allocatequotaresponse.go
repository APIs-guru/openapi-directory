package shared

// AllocateQuotaResponse
// Response message for the AllocateQuota method.
type AllocateQuotaResponse struct {
	AllocateErrors  []QuotaError     `json:"allocateErrors,omitempty"`
	AllocateInfo    *AllocateInfo    `json:"allocateInfo,omitempty"`
	OperationID     *string          `json:"operationId,omitempty"`
	QuotaMetrics    []MetricValueSet `json:"quotaMetrics,omitempty"`
	ServiceConfigID *string          `json:"serviceConfigId,omitempty"`
}
