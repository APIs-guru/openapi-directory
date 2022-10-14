package shared

type SasPortalListCustomersResponse struct {
	Customers     []SasPortalCustomer `json:"customers,omitempty"`
	NextPageToken *string             `json:"nextPageToken,omitempty"`
}
