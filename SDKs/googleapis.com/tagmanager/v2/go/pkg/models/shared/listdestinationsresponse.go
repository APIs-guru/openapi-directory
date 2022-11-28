package shared

type ListDestinationsResponse struct {
	Destination   []Destination `json:"destination,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
