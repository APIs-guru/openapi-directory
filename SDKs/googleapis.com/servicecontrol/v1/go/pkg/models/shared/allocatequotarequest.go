package shared

type AllocateQuotaRequest struct {
	AllocateOperation *QuotaOperation `json:"allocateOperation,omitempty"`
	ServiceConfigID   *string         `json:"serviceConfigId,omitempty"`
}
