package shared

// ListAttestorsResponse
// Response message for BinauthzManagementService.ListAttestors.
type ListAttestorsResponse struct {
	Attestors     []Attestor `json:"attestors,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
