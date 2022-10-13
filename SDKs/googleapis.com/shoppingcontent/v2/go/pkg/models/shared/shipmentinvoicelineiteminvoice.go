package shared

type ShipmentInvoiceLineItemInvoice struct {
	LineItemID      *string      `json:"lineItemId"`
	ProductID       *string      `json:"productId"`
	ShipmentUnitIds []string     `json:"shipmentUnitIds"`
	UnitInvoice     *UnitInvoice `json:"unitInvoice"`
}
