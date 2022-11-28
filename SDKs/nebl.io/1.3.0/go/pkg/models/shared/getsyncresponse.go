package shared

// GetSyncResponse
// Object containing node sync status
type GetSyncResponse struct {
	BlockChainHeight *float64 `json:"blockChainHeight,omitempty"`
	Error            *string  `json:"error,omitempty"`
	Height           *float64 `json:"height,omitempty"`
	Status           *string  `json:"status,omitempty"`
	SyncPercentage   *float64 `json:"syncPercentage,omitempty"`
	Type             *string  `json:"type,omitempty"`
}
