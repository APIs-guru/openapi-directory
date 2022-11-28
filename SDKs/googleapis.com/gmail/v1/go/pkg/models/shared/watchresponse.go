package shared

// WatchResponse
// Push notification watch response.
type WatchResponse struct {
	Expiration *string `json:"expiration,omitempty"`
	HistoryID  *string `json:"historyId,omitempty"`
}
