package shared

// GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio
// Specifies an audio clip to be played by the client as part of the response.
type GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio struct {
	AllowPlaybackInterruption *bool   `json:"allowPlaybackInterruption,omitempty"`
	AudioURI                  *string `json:"audioUri,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput
// Specifies an audio clip to be played by the client as part of the response.
type GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput struct {
	AudioURI *string `json:"audioUri,omitempty"`
}
