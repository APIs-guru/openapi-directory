package shared

// AdvertiserInvoicesListResponse
// Invoice List Response
type AdvertiserInvoicesListResponse struct {
	Invoices      []Invoice `json:"invoices,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
