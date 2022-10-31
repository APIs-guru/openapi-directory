package shared



type BulkUpdateLineItemsRequest struct {
    LineItemIds []string `json:"lineItemIds,omitempty"`
    TargetLineItem *LineItem `json:"targetLineItem,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

