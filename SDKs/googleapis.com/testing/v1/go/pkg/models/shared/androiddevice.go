package shared

type AndroidDevice struct {
	AndroidModelID   *string `json:"androidModelId"`
	AndroidVersionID *string `json:"androidVersionId"`
	Locale           *string `json:"locale"`
	Orientation      *string `json:"orientation"`
}
