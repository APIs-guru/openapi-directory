package shared

// CompanionClickThroughOverride
// Companion Click-through override.
type CompanionClickThroughOverride struct {
	ClickThroughURL *ClickThroughURL `json:"clickThroughUrl,omitempty"`
	CreativeID      *string          `json:"creativeId,omitempty"`
}
