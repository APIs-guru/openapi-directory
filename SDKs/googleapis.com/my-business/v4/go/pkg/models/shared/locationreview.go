package shared

// LocationReview
// Represents a review with location information.
type LocationReview struct {
	Name   *string `json:"name,omitempty"`
	Review *Review `json:"review,omitempty"`
}
