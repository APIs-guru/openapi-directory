package shared

type Row struct {
	Weight  *string  `json:"weight"`
	Widgets []Widget `json:"widgets"`
}
