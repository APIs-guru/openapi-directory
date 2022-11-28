package shared

// GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput
// The text response message.
type GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput struct {
	Text []string `json:"text,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1ResponseMessageText
// The text response message.
type GoogleCloudDialogflowCxV3beta1ResponseMessageText struct {
	AllowPlaybackInterruption *bool    `json:"allowPlaybackInterruption,omitempty"`
	Text                      []string `json:"text,omitempty"`
}
