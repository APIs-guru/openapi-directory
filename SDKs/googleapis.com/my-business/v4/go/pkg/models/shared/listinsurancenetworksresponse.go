package shared

// ListInsuranceNetworksResponse
// Response message for InsuranceNetworkService.ListInsuranceNetworks
type ListInsuranceNetworksResponse struct {
	Networks      []InsuranceNetwork `json:"networks,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
