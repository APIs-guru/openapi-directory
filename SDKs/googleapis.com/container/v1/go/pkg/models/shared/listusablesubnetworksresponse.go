package shared

// ListUsableSubnetworksResponse
// ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
type ListUsableSubnetworksResponse struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	Subnetworks   []UsableSubnetwork `json:"subnetworks,omitempty"`
}
