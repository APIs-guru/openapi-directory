package shared

type RateTier struct {
	Price       *Money   `json:"price"`
	StartAmount *float64 `json:"startAmount"`
}
