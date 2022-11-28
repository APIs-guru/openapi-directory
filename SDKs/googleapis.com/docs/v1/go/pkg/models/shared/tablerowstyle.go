package shared

// TableRowStyle
// Styles that apply to a table row.
type TableRowStyle struct {
	MinRowHeight    *Dimension `json:"minRowHeight,omitempty"`
	PreventOverflow *bool      `json:"preventOverflow,omitempty"`
	TableHeader     *bool      `json:"tableHeader,omitempty"`
}
