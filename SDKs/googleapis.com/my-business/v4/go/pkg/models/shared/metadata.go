package shared

type Metadata struct {
	Duplicate    *Duplicate `json:"duplicate"`
	MapsURL      *string    `json:"mapsUrl"`
	NewReviewURL *string    `json:"newReviewUrl"`
}
