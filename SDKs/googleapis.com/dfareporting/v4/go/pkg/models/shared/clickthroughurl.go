package shared

// ClickThroughURL
// Click-through URL
type ClickThroughURL struct {
	ComputedClickThroughURL *string `json:"computedClickThroughUrl,omitempty"`
	CustomClickThroughURL   *string `json:"customClickThroughUrl,omitempty"`
	DefaultLandingPage      *bool   `json:"defaultLandingPage,omitempty"`
	LandingPageID           *string `json:"landingPageId,omitempty"`
}
