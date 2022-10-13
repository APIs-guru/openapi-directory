package shared

type ClickThroughURL struct {
	ComputedClickThroughURL *string `json:"computedClickThroughUrl"`
	CustomClickThroughURL   *string `json:"customClickThroughUrl"`
	DefaultLandingPage      *bool   `json:"defaultLandingPage"`
	LandingPageID           *string `json:"landingPageId"`
}
