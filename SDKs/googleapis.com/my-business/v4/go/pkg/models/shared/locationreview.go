package shared

type LocationReview struct {
	Name   *string `json:"name,omitempty"`
	Review *Review `json:"review,omitempty"`
}
