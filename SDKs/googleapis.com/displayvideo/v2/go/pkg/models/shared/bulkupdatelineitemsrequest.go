package shared

// BulkUpdateLineItemsRequestInput
// Request message for LineItemService.BulkUpdateLineItems.
type BulkUpdateLineItemsRequestInput struct {
	LineItemIds    []string       `json:"lineItemIds,omitempty"`
	TargetLineItem *LineItemInput `json:"targetLineItem,omitempty"`
	UpdateMask     *string        `json:"updateMask,omitempty"`
}
