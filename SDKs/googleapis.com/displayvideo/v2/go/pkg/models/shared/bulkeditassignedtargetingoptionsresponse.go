package shared

type BulkEditAssignedTargetingOptionsResponse struct {
	Errors             []Status `json:"errors,omitempty"`
	FailedLineItemIds  []string `json:"failedLineItemIds,omitempty"`
	UpdatedLineItemIds []string `json:"updatedLineItemIds,omitempty"`
}
