package shared

type OrderinvoicesCreateRefundInvoiceRequest struct {
	InvoiceID        *string                                                              `json:"invoiceId"`
	OperationID      *string                                                              `json:"operationId"`
	RefundOnlyOption *OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption `json:"refundOnlyOption"`
	ReturnOption     *OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption `json:"returnOption"`
	ShipmentInvoices []ShipmentInvoice                                                    `json:"shipmentInvoices"`
}
