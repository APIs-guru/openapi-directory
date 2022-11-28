package shared

// GridLayout
// A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
type GridLayout struct {
	Columns *string  `json:"columns,omitempty"`
	Widgets []Widget `json:"widgets,omitempty"`
}
