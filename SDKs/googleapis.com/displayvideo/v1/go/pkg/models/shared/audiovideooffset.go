package shared

// AudioVideoOffset
// The length an audio or a video has been played.
type AudioVideoOffset struct {
	Percentage *string `json:"percentage,omitempty"`
	Seconds    *string `json:"seconds,omitempty"`
}
