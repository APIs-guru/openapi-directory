package shared

// GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText
// A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
type GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText struct {
	AllowPlaybackInterruption *bool   `json:"allowPlaybackInterruption,omitempty"`
	Ssml                      *string `json:"ssml,omitempty"`
	Text                      *string `json:"text,omitempty"`
}

// GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput
// A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
type GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput struct {
	Ssml *string `json:"ssml,omitempty"`
	Text *string `json:"text,omitempty"`
}
