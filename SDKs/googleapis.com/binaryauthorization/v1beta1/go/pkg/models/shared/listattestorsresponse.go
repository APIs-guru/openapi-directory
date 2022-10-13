package shared

type ListAttestorsResponse struct {
	Attestors     []Attestor `json:"attestors"`
	NextPageToken *string    `json:"nextPageToken"`
}
