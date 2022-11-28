package shared

// GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment
// Represents one segment of audio.
type GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment struct {
	AllowPlaybackInterruption *bool   `json:"allowPlaybackInterruption,omitempty"`
	Audio                     *string `json:"audio,omitempty"`
	URI                       *string `json:"uri,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput
// Represents one segment of audio.
type GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput struct {
	Audio *string `json:"audio,omitempty"`
	URI   *string `json:"uri,omitempty"`
}
