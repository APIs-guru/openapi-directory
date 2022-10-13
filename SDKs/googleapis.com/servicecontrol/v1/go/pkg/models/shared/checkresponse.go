package shared

type CheckResponse struct {
	CheckErrors      []CheckError `json:"checkErrors"`
	CheckInfo        *CheckInfo   `json:"checkInfo"`
	OperationID      *string      `json:"operationId"`
	QuotaInfo        *QuotaInfo   `json:"quotaInfo"`
	ServiceConfigID  *string      `json:"serviceConfigId"`
	ServiceRolloutID *string      `json:"serviceRolloutId"`
}
