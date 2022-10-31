package shared

type MerchantOrderReturnItem struct {
	CustomerReturnReason    *CustomerReturnReason    `json:"customerReturnReason,omitempty"`
	ItemID                  *string                  `json:"itemId,omitempty"`
	MerchantRejectionReason *MerchantRejectionReason `json:"merchantRejectionReason,omitempty"`
	MerchantReturnReason    *RefundReason            `json:"merchantReturnReason,omitempty"`
	Product                 *OrderLineItemProduct    `json:"product,omitempty"`
	RefundableAmount        *MonetaryAmount          `json:"refundableAmount,omitempty"`
	ReturnItemID            *string                  `json:"returnItemId,omitempty"`
	ReturnShipmentIds       []string                 `json:"returnShipmentIds,omitempty"`
	ShipmentGroupID         *string                  `json:"shipmentGroupId,omitempty"`
	ShipmentUnitID          *string                  `json:"shipmentUnitId,omitempty"`
	State                   *string                  `json:"state,omitempty"`
}
