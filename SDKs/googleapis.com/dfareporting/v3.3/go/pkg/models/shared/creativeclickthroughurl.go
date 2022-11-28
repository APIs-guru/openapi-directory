package shared

// CreativeClickThroughURL
// Click-through URL
type CreativeClickThroughURL struct {
	ComputedClickThroughURL *string `json:"computedClickThroughUrl,omitempty"`
	CustomClickThroughURL   *string `json:"customClickThroughUrl,omitempty"`
	LandingPageID           *string `json:"landingPageId,omitempty"`
}
