package shared

type DetectLanguageRequest struct {
	Content  *string           `json:"content"`
	Labels   map[string]string `json:"labels"`
	MimeType *string           `json:"mimeType"`
	Model    *string           `json:"model"`
}
