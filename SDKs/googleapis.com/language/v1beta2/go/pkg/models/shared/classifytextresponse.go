package shared

type ClassifyTextResponse struct {
	Categories []ClassificationCategory `json:"categories"`
}
