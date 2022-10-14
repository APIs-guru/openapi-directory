package shared

type TableRowStyle struct {
	MinRowHeight    *Dimension `json:"minRowHeight,omitempty"`
	PreventOverflow *bool      `json:"preventOverflow,omitempty"`
	TableHeader     *bool      `json:"tableHeader,omitempty"`
}
