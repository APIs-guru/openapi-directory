package shared

type CheckResponse struct {
	CheckErrors      []CheckError `json:"checkErrors,omitempty"`
	CheckInfo        *CheckInfo   `json:"checkInfo,omitempty"`
	OperationID      *string      `json:"operationId,omitempty"`
	QuotaInfo        *QuotaInfo   `json:"quotaInfo,omitempty"`
	ServiceConfigID  *string      `json:"serviceConfigId,omitempty"`
	ServiceRolloutID *string      `json:"serviceRolloutId,omitempty"`
}
