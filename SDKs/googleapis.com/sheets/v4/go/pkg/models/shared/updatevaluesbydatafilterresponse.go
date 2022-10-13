package shared

type UpdateValuesByDataFilterResponse struct {
	DataFilter     *DataFilter `json:"dataFilter"`
	UpdatedCells   *int32      `json:"updatedCells"`
	UpdatedColumns *int32      `json:"updatedColumns"`
	UpdatedData    *ValueRange `json:"updatedData"`
	UpdatedRange   *string     `json:"updatedRange"`
	UpdatedRows    *int32      `json:"updatedRows"`
}
