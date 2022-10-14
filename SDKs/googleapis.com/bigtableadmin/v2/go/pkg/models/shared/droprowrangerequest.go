package shared

type DropRowRangeRequest struct {
	DeleteAllDataFromTable *bool   `json:"deleteAllDataFromTable,omitempty"`
	RowKeyPrefix           *string `json:"rowKeyPrefix,omitempty"`
}
