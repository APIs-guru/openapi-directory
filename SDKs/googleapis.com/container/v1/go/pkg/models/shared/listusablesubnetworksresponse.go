package shared

type ListUsableSubnetworksResponse struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	Subnetworks   []UsableSubnetwork `json:"subnetworks,omitempty"`
}
