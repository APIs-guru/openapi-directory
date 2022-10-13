package shared

type ListInsuranceNetworksResponse struct {
	Networks      []InsuranceNetwork `json:"networks"`
	NextPageToken *string            `json:"nextPageToken"`
}
