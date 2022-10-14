package shared

type CreateTableRequest struct {
	InitialSplits []Split `json:"initialSplits,omitempty"`
	Table         *Table  `json:"table,omitempty"`
	TableID       *string `json:"tableId,omitempty"`
}
