package shared

// TableStyle
// Styles that apply to a table.
type TableStyle struct {
	TableColumnProperties []TableColumnProperties `json:"tableColumnProperties,omitempty"`
}
