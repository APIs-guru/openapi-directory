package shared

type ListLineItemsResponse struct {
	LineItems     []LineItem `json:"lineItems,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
