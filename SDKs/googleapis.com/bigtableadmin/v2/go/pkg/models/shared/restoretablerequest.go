package shared

// RestoreTableRequest
// The request for RestoreTable.
type RestoreTableRequest struct {
	Backup  *string `json:"backup,omitempty"`
	TableID *string `json:"tableId,omitempty"`
}
