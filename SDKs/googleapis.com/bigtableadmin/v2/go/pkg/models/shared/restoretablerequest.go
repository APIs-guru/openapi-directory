package shared

type RestoreTableRequest struct {
	Backup  *string `json:"backup"`
	TableID *string `json:"tableId"`
}
