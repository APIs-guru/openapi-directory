package shared

type AreaResponse struct {
	Areas    []Area `json:"areas"`
	RowCount *int32 `json:"row_count"`
}
