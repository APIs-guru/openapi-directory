package shared

// ColumnSettings
// The persistent settings for a table's columns.
type ColumnSettings struct {
	Column  *string `json:"column,omitempty"`
	Visible *bool   `json:"visible,omitempty"`
}
