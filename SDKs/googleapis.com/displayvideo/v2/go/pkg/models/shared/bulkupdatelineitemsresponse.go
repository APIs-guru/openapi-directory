package shared

type BulkUpdateLineItemsResponse struct {
	Errors             []Status `json:"errors"`
	FailedLineItemIds  []string `json:"failedLineItemIds"`
	SkippedLineItemIds []string `json:"skippedLineItemIds"`
	UpdatedLineItemIds []string `json:"updatedLineItemIds"`
}
