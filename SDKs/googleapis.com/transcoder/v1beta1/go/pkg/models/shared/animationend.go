package shared

// AnimationEnd
// End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.
type AnimationEnd struct {
	StartTimeOffset *string `json:"startTimeOffset,omitempty"`
}
