package shared

// GoogleCloudDialogflowCxV3ResponseMessageText
// The text response message.
type GoogleCloudDialogflowCxV3ResponseMessageText struct {
	AllowPlaybackInterruption *bool    `json:"allowPlaybackInterruption,omitempty"`
	Text                      []string `json:"text,omitempty"`
}

// GoogleCloudDialogflowCxV3ResponseMessageTextInput
// The text response message.
type GoogleCloudDialogflowCxV3ResponseMessageTextInput struct {
	Text []string `json:"text,omitempty"`
}
