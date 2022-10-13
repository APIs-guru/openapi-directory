package shared

type CreativeClickThroughURL struct {
	ComputedClickThroughURL *string `json:"computedClickThroughUrl"`
	CustomClickThroughURL   *string `json:"customClickThroughUrl"`
	LandingPageID           *string `json:"landingPageId"`
}
