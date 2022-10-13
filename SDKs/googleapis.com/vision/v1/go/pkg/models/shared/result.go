package shared

type Result struct {
	Image   *string  `json:"image"`
	Product *Product `json:"product"`
	Score   *float32 `json:"score"`
}
