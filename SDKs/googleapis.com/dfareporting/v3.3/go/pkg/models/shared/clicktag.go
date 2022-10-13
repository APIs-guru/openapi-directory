package shared

type ClickTag struct {
	ClickThroughURL *CreativeClickThroughURL `json:"clickThroughUrl"`
	EventName       *string                  `json:"eventName"`
	Name            *string                  `json:"name"`
}
