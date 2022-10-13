package shared

type Column struct {
	Weight  *string  `json:"weight"`
	Widgets []Widget `json:"widgets"`
}
