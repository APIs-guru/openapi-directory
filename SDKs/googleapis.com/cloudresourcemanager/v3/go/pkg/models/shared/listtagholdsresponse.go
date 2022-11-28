package shared

// ListTagHoldsResponse
// The ListTagHolds response.
type ListTagHoldsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	TagHolds      []TagHold `json:"tagHolds,omitempty"`
}
