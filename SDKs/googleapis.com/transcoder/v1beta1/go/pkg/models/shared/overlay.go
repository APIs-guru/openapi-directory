package shared

// Overlay
// Overlay configuration.
type Overlay struct {
	Animations []Animation `json:"animations,omitempty"`
	Image      *Image      `json:"image,omitempty"`
}
