package shared

type WatchResponse struct {
	Expiration *string `json:"expiration,omitempty"`
	HistoryID  *string `json:"historyId,omitempty"`
}
