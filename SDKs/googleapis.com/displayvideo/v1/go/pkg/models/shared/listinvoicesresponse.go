package shared

type ListInvoicesResponse struct {
	Invoices      []Invoice `json:"invoices"`
	NextPageToken *string   `json:"nextPageToken"`
}
