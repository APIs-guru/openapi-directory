package shared

type TableBorderCell struct {
	Location              *TableCellLocation     `json:"location"`
	TableBorderProperties *TableBorderProperties `json:"tableBorderProperties"`
}
