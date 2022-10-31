package shared

type OrderinvoicesCreateChargeInvoiceRequest struct {
	InvoiceID        *string                          `json:"invoiceId,omitempty"`
	InvoiceSummary   *InvoiceSummary                  `json:"invoiceSummary,omitempty"`
	LineItemInvoices []ShipmentInvoiceLineItemInvoice `json:"lineItemInvoices,omitempty"`
	OperationID      *string                          `json:"operationId,omitempty"`
	ShipmentGroupID  *string                          `json:"shipmentGroupId,omitempty"`
}
