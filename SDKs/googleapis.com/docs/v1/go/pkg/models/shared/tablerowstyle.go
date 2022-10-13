package shared

type TableRowStyle struct {
	MinRowHeight    *Dimension `json:"minRowHeight"`
	PreventOverflow *bool      `json:"preventOverflow"`
	TableHeader     *bool      `json:"tableHeader"`
}
