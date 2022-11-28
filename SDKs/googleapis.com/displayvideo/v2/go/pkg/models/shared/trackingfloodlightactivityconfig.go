package shared

// TrackingFloodlightActivityConfig
// Settings that control the behavior of a single Floodlight activity config.
type TrackingFloodlightActivityConfig struct {
	FloodlightActivityID        *string `json:"floodlightActivityId,omitempty"`
	PostClickLookbackWindowDays *int32  `json:"postClickLookbackWindowDays,omitempty"`
	PostViewLookbackWindowDays  *int32  `json:"postViewLookbackWindowDays,omitempty"`
}
