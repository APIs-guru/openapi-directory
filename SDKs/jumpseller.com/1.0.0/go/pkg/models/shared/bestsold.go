package shared

type BestSold struct {
	Count       *int64   `json:"count"`
	ProductID   *int64   `json:"product_id"`
	ProductName *string  `json:"product_name"`
	Total       *float32 `json:"total"`
}
