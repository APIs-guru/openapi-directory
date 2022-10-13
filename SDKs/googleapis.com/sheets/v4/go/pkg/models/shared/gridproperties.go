package shared

type GridProperties struct {
	ColumnCount             *int32 `json:"columnCount"`
	ColumnGroupControlAfter *bool  `json:"columnGroupControlAfter"`
	FrozenColumnCount       *int32 `json:"frozenColumnCount"`
	FrozenRowCount          *int32 `json:"frozenRowCount"`
	HideGridlines           *bool  `json:"hideGridlines"`
	RowCount                *int32 `json:"rowCount"`
	RowGroupControlAfter    *bool  `json:"rowGroupControlAfter"`
}
