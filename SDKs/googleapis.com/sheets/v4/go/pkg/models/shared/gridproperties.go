package shared



type GridProperties struct {
    ColumnCount *int32 `json:"columnCount,omitempty"`
    ColumnGroupControlAfter *bool `json:"columnGroupControlAfter,omitempty"`
    FrozenColumnCount *int32 `json:"frozenColumnCount,omitempty"`
    FrozenRowCount *int32 `json:"frozenRowCount,omitempty"`
    HideGridlines *bool `json:"hideGridlines,omitempty"`
    RowCount *int32 `json:"rowCount,omitempty"`
    RowGroupControlAfter *bool `json:"rowGroupControlAfter,omitempty"`
    
}

