package shared

// BulkUpdateLineItemsResponse
// Response message for LineItemService.BulkUpdateLineItems.
type BulkUpdateLineItemsResponse struct {
	Errors             []Status `json:"errors,omitempty"`
	FailedLineItemIds  []string `json:"failedLineItemIds,omitempty"`
	SkippedLineItemIds []string `json:"skippedLineItemIds,omitempty"`
	UpdatedLineItemIds []string `json:"updatedLineItemIds,omitempty"`
}
