package shared

type CompanionClickThroughOverride struct {
	ClickThroughURL *ClickThroughURL `json:"clickThroughUrl,omitempty"`
	CreativeID      *string          `json:"creativeId,omitempty"`
}
