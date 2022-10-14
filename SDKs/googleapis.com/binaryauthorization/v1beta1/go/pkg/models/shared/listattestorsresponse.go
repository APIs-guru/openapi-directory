package shared

type ListAttestorsResponse struct {
	Attestors     []Attestor `json:"attestors,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
