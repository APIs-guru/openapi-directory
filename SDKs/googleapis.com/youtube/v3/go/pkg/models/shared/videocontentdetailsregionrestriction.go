package shared

// VideoContentDetailsRegionRestriction
// DEPRECATED Region restriction of the video.
type VideoContentDetailsRegionRestriction struct {
	Allowed []string `json:"allowed,omitempty"`
	Blocked []string `json:"blocked,omitempty"`
}
