package shared

type Screen struct {
	FileReference *string `json:"fileReference,omitempty"`
	Locale        *string `json:"locale,omitempty"`
	Model         *string `json:"model,omitempty"`
	Version       *string `json:"version,omitempty"`
}
