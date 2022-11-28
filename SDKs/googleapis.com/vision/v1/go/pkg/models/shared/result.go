package shared

// Result
// Information about a product.
type Result struct {
	Image   *string  `json:"image,omitempty"`
	Product *Product `json:"product,omitempty"`
	Score   *float32 `json:"score,omitempty"`
}
