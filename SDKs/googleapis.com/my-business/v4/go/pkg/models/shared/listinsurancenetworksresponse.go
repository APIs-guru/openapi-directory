package shared

type ListInsuranceNetworksResponse struct {
	Networks      []InsuranceNetwork `json:"networks,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
