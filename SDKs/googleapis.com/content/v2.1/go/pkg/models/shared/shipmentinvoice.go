package shared

type ShipmentInvoice struct {
	InvoiceSummary   *InvoiceSummary                  `json:"invoiceSummary"`
	LineItemInvoices []ShipmentInvoiceLineItemInvoice `json:"lineItemInvoices"`
	ShipmentGroupID  *string                          `json:"shipmentGroupId"`
}
