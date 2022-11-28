package shared

// ClickTag
// Creative Click Tag.
type ClickTag struct {
	ClickThroughURL *CreativeClickThroughURL `json:"clickThroughUrl,omitempty"`
	EventName       *string                  `json:"eventName,omitempty"`
	Name            *string                  `json:"name,omitempty"`
}
