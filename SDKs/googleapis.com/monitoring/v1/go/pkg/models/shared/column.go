package shared

type Column struct {
	Weight  *string  `json:"weight,omitempty"`
	Widgets []Widget `json:"widgets,omitempty"`
}
