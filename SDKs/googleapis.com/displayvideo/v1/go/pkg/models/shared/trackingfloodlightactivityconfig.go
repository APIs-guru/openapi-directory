package shared

type TrackingFloodlightActivityConfig struct {
	FloodlightActivityID        *string `json:"floodlightActivityId"`
	PostClickLookbackWindowDays *int32  `json:"postClickLookbackWindowDays"`
	PostViewLookbackWindowDays  *int32  `json:"postViewLookbackWindowDays"`
}
