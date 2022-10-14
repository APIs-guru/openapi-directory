package shared

type Result struct {
	Image   *string  `json:"image,omitempty"`
	Product *Product `json:"product,omitempty"`
	Score   *float32 `json:"score,omitempty"`
}
