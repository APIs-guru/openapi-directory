package shared

type WatchResponse struct {
	Expiration *string `json:"expiration"`
	HistoryID  *string `json:"historyId"`
}
