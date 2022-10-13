package shared

type AllocateQuotaResponse struct {
	AllocateErrors  []QuotaError     `json:"allocateErrors"`
	AllocateInfo    *AllocateInfo    `json:"allocateInfo"`
	OperationID     *string          `json:"operationId"`
	QuotaMetrics    []MetricValueSet `json:"quotaMetrics"`
	ServiceConfigID *string          `json:"serviceConfigId"`
}
