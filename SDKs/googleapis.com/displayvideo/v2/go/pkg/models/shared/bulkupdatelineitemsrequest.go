package shared

type BulkUpdateLineItemsRequest struct {
	LineItemIds    []string  `json:"lineItemIds"`
	TargetLineItem *LineItem `json:"targetLineItem"`
	UpdateMask     *string   `json:"updateMask"`
}
