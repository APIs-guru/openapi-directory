package shared

// ListInventoriesResponse
// A response message for listing inventory data for all VMs in a specified location.
type ListInventoriesResponse struct {
	Inventories   []Inventory `json:"inventories,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
