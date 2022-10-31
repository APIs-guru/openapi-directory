package shared

type UpdateTransferJobRequest struct {
	ProjectID                  *string      `json:"projectId,omitempty"`
	TransferJob                *TransferJob `json:"transferJob,omitempty"`
	UpdateTransferJobFieldMask *string      `json:"updateTransferJobFieldMask,omitempty"`
}
