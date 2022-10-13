package shared

type Item struct {
	ItemID *string `json:"itemId"`
	Labels []Label `json:"labels"`
	Price  *Money  `json:"price"`
}
