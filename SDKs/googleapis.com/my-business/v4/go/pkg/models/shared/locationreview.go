package shared

type LocationReview struct {
	Name   *string `json:"name"`
	Review *Review `json:"review"`
}
