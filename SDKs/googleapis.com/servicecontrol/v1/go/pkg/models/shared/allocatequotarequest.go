package shared

// AllocateQuotaRequest
// Request message for the AllocateQuota method.
type AllocateQuotaRequest struct {
	AllocateOperation *QuotaOperation `json:"allocateOperation,omitempty"`
	ServiceConfigID   *string         `json:"serviceConfigId,omitempty"`
}
