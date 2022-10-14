package shared

type BestSold struct {
	Count       *int64   `json:"count,omitempty"`
	ProductID   *int64   `json:"product_id,omitempty"`
	ProductName *string  `json:"product_name,omitempty"`
	Total       *float32 `json:"total,omitempty"`
}
