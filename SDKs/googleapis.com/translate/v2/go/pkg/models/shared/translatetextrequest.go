package shared

type TranslateTextRequest struct {
	Format *string  `json:"format"`
	Model  *string  `json:"model"`
	Q      []string `json:"q"`
	Source *string  `json:"source"`
	Target *string  `json:"target"`
}
