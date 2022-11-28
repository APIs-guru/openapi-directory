package shared

// TranslateTextRequest
// The main translation request message for the Cloud Translation API.
type TranslateTextRequest struct {
	Format *string  `json:"format,omitempty"`
	Model  *string  `json:"model,omitempty"`
	Q      []string `json:"q,omitempty"`
	Source *string  `json:"source,omitempty"`
	Target *string  `json:"target,omitempty"`
}
