package shared

type OrderinvoicesCreateRefundInvoiceRequest struct {
	InvoiceID        *string                                                              `json:"invoiceId,omitempty"`
	OperationID      *string                                                              `json:"operationId,omitempty"`
	RefundOnlyOption *OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption `json:"refundOnlyOption,omitempty"`
	ReturnOption     *OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption `json:"returnOption,omitempty"`
	ShipmentInvoices []ShipmentInvoice                                                    `json:"shipmentInvoices,omitempty"`
}
