package shared

type GridLayout struct {
	Columns *string  `json:"columns"`
	Widgets []Widget `json:"widgets"`
}
