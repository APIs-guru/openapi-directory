package shared

type MerchantOrderReturnItem struct {
	CustomerReturnReason *CustomerReturnReason `json:"customerReturnReason"`
	ItemID               *string               `json:"itemId"`
	MerchantReturnReason *RefundReason         `json:"merchantReturnReason"`
	Product              *OrderLineItemProduct `json:"product"`
	ReturnShipmentIds    []string              `json:"returnShipmentIds"`
	State                *string               `json:"state"`
}
