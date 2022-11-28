package shared

// Metadata
// Additional non-user-editable information about the location.
type Metadata struct {
	Duplicate    *Duplicate `json:"duplicate,omitempty"`
	MapsURL      *string    `json:"mapsUrl,omitempty"`
	NewReviewURL *string    `json:"newReviewUrl,omitempty"`
}
