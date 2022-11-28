package shared

// GoogleUpdatedLocation
// Represents a location that was modified by Google.
type GoogleUpdatedLocation struct {
	DiffMask *string   `json:"diffMask,omitempty"`
	Location *Location `json:"location,omitempty"`
}
