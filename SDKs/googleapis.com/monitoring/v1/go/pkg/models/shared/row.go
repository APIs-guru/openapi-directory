package shared

type Row struct {
	Weight  *string  `json:"weight,omitempty"`
	Widgets []Widget `json:"widgets,omitempty"`
}
