package shared

type GridLayout struct {
	Columns *string  `json:"columns,omitempty"`
	Widgets []Widget `json:"widgets,omitempty"`
}
