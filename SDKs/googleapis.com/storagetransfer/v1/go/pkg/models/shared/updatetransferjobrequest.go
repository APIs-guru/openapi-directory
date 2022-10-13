package shared

type UpdateTransferJobRequest struct {
	ProjectID                  *string      `json:"projectId"`
	TransferJob                *TransferJob `json:"transferJob"`
	UpdateTransferJobFieldMask *string      `json:"updateTransferJobFieldMask"`
}
