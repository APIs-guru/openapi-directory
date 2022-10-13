package shared

type SasPortalListCustomersResponse struct {
	Customers     []SasPortalCustomer `json:"customers"`
	NextPageToken *string             `json:"nextPageToken"`
}
