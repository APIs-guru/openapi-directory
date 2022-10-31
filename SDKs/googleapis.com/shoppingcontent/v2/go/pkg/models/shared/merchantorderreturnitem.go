package shared

type MerchantOrderReturnItem struct {
	CustomerReturnReason *CustomerReturnReason `json:"customerReturnReason,omitempty"`
	ItemID               *string               `json:"itemId,omitempty"`
	MerchantReturnReason *RefundReason         `json:"merchantReturnReason,omitempty"`
	Product              *OrderLineItemProduct `json:"product,omitempty"`
	ReturnShipmentIds    []string              `json:"returnShipmentIds,omitempty"`
	State                *string               `json:"state,omitempty"`
}
