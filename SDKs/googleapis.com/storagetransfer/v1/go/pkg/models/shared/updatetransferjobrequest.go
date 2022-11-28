package shared

// UpdateTransferJobRequestInput
// Request passed to UpdateTransferJob.
type UpdateTransferJobRequestInput struct {
	ProjectID                  *string           `json:"projectId,omitempty"`
	TransferJob                *TransferJobInput `json:"transferJob,omitempty"`
	UpdateTransferJobFieldMask *string           `json:"updateTransferJobFieldMask,omitempty"`
}
