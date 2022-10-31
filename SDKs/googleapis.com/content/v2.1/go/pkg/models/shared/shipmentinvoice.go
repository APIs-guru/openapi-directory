package shared



type ShipmentInvoice struct {
    InvoiceSummary *InvoiceSummary `json:"invoiceSummary,omitempty"`
    LineItemInvoices []ShipmentInvoiceLineItemInvoice `json:"lineItemInvoices,omitempty"`
    ShipmentGroupID *string `json:"shipmentGroupId,omitempty"`
    
}

