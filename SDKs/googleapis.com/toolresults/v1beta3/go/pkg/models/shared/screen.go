package shared

type Screen struct {
	FileReference *string `json:"fileReference"`
	Locale        *string `json:"locale"`
	Model         *string `json:"model"`
	Version       *string `json:"version"`
}
