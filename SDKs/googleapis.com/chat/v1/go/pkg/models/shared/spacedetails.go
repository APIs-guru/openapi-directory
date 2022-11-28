package shared

// SpaceDetails
// Details about the space including description and rules.
type SpaceDetails struct {
	Description *string `json:"description,omitempty"`
	Guidelines  *string `json:"guidelines,omitempty"`
}
