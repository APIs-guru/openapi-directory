package shared

type BulkEditAssignedTargetingOptionsResponse struct {
	Errors             []Status `json:"errors"`
	FailedLineItemIds  []string `json:"failedLineItemIds"`
	UpdatedLineItemIds []string `json:"updatedLineItemIds"`
}
