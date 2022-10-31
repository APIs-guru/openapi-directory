package shared

type UpdateValuesByDataFilterResponse struct {
	DataFilter     *DataFilter `json:"dataFilter,omitempty"`
	UpdatedCells   *int32      `json:"updatedCells,omitempty"`
	UpdatedColumns *int32      `json:"updatedColumns,omitempty"`
	UpdatedData    *ValueRange `json:"updatedData,omitempty"`
	UpdatedRange   *string     `json:"updatedRange,omitempty"`
	UpdatedRows    *int32      `json:"updatedRows,omitempty"`
}
