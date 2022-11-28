package shared

// LookbackConfiguration
// Lookback configuration settings.
type LookbackConfiguration struct {
	ClickDuration                    *int32 `json:"clickDuration,omitempty"`
	PostImpressionActivitiesDuration *int32 `json:"postImpressionActivitiesDuration,omitempty"`
}
