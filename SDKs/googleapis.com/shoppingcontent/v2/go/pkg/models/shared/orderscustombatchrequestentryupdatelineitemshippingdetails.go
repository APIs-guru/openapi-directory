package shared



type OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails struct {
    DeliverByDate *string `json:"deliverByDate,omitempty"`
    LineItemID *string `json:"lineItemId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    ShipByDate *string `json:"shipByDate,omitempty"`
    
}

