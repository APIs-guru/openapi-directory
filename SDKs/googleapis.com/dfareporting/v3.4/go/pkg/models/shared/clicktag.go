package shared

type ClickTag struct {
	ClickThroughURL *CreativeClickThroughURL `json:"clickThroughUrl,omitempty"`
	EventName       *string                  `json:"eventName,omitempty"`
	Name            *string                  `json:"name,omitempty"`
}
