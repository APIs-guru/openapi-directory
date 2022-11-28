package shared

// SasPortalListCustomersResponse
// Response for `ListCustomers`.
type SasPortalListCustomersResponse struct {
	Customers     []SasPortalCustomer `json:"customers,omitempty"`
	NextPageToken *string             `json:"nextPageToken,omitempty"`
}
