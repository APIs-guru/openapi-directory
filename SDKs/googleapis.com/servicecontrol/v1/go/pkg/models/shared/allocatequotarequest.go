package shared

type AllocateQuotaRequest struct {
	AllocateOperation *QuotaOperation `json:"allocateOperation"`
	ServiceConfigID   *string         `json:"serviceConfigId"`
}
