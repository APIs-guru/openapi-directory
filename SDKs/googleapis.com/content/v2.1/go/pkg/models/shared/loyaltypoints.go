package shared

type LoyaltyPoints struct {
	Name        *string  `json:"name"`
	PointsValue *string  `json:"pointsValue"`
	Ratio       *float64 `json:"ratio"`
}
