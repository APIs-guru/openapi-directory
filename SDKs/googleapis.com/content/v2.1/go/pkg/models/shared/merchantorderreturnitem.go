package shared

type MerchantOrderReturnItem struct {
	CustomerReturnReason    *CustomerReturnReason    `json:"customerReturnReason"`
	ItemID                  *string                  `json:"itemId"`
	MerchantRejectionReason *MerchantRejectionReason `json:"merchantRejectionReason"`
	MerchantReturnReason    *RefundReason            `json:"merchantReturnReason"`
	Product                 *OrderLineItemProduct    `json:"product"`
	RefundableAmount        *MonetaryAmount          `json:"refundableAmount"`
	ReturnItemID            *string                  `json:"returnItemId"`
	ReturnShipmentIds       []string                 `json:"returnShipmentIds"`
	ShipmentGroupID         *string                  `json:"shipmentGroupId"`
	ShipmentUnitID          *string                  `json:"shipmentUnitId"`
	State                   *string                  `json:"state"`
}
