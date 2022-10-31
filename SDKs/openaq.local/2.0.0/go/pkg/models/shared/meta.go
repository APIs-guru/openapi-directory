package shared

type Meta struct {
	Found   *int64  `json:"found,omitempty"`
	License *string `json:"license,omitempty"`
	Limit   *int64  `json:"limit,omitempty"`
	Name    *string `json:"name,omitempty"`
	Page    *int64  `json:"page,omitempty"`
	Website *string `json:"website,omitempty"`
}
