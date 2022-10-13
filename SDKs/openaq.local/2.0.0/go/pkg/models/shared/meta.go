package shared

type Meta struct {
	Found   *int64  `json:"found"`
	License *string `json:"license"`
	Limit   *int64  `json:"limit"`
	Name    *string `json:"name"`
	Page    *int64  `json:"page"`
	Website *string `json:"website"`
}
