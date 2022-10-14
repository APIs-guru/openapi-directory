package shared

type TableBorderCell struct {
	Location              *TableCellLocation     `json:"location,omitempty"`
	TableBorderProperties *TableBorderProperties `json:"tableBorderProperties,omitempty"`
}
