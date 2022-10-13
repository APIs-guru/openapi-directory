package shared

type AdvertiserInvoicesListResponse struct {
	Invoices      []Invoice `json:"invoices"`
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
}
