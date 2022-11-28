package shared

// GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText
// A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
type GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText struct {
	AllowPlaybackInterruption *bool   `json:"allowPlaybackInterruption,omitempty"`
	Ssml                      *string `json:"ssml,omitempty"`
	Text                      *string `json:"text,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput
// A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
type GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput struct {
	Ssml *string `json:"ssml,omitempty"`
	Text *string `json:"text,omitempty"`
}
