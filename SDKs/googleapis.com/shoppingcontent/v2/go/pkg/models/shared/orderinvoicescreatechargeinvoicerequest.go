package shared

type OrderinvoicesCreateChargeInvoiceRequest struct {
	InvoiceID        *string                          `json:"invoiceId"`
	InvoiceSummary   *InvoiceSummary                  `json:"invoiceSummary"`
	LineItemInvoices []ShipmentInvoiceLineItemInvoice `json:"lineItemInvoices"`
	OperationID      *string                          `json:"operationId"`
	ShipmentGroupID  *string                          `json:"shipmentGroupId"`
}
