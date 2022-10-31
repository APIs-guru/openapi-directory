package shared



type ListInvoicesResponse struct {
    Invoices []Invoice `json:"invoices,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

