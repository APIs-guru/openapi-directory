package shared

type ListLineItemsResponse struct {
	LineItems     []LineItem `json:"lineItems"`
	NextPageToken *string    `json:"nextPageToken"`
}
