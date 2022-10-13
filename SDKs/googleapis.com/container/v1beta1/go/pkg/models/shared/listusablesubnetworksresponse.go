package shared

type ListUsableSubnetworksResponse struct {
	NextPageToken *string            `json:"nextPageToken"`
	Subnetworks   []UsableSubnetwork `json:"subnetworks"`
}
