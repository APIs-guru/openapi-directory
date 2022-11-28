package shared

// Column
// Defines the layout properties and content for a column.
type Column struct {
	Weight  *string  `json:"weight,omitempty"`
	Widgets []Widget `json:"widgets,omitempty"`
}
