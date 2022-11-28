package shared

// ListHoldsResponse
// The holds for a matter.
type ListHoldsResponse struct {
	Holds         []Hold  `json:"holds,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
