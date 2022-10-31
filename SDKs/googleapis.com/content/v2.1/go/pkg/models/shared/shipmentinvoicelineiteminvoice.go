package shared

type ShipmentInvoiceLineItemInvoice struct {
	LineItemID      *string      `json:"lineItemId,omitempty"`
	ProductID       *string      `json:"productId,omitempty"`
	ShipmentUnitIds []string     `json:"shipmentUnitIds,omitempty"`
	UnitInvoice     *UnitInvoice `json:"unitInvoice,omitempty"`
}
