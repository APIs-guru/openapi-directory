package shared

// Row
// Defines the layout properties and content for a row.
type Row struct {
	Weight  *string  `json:"weight,omitempty"`
	Widgets []Widget `json:"widgets,omitempty"`
}
