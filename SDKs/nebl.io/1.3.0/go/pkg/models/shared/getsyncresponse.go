package shared

type GetSyncResponse struct {
	BlockChainHeight *float64 `json:"blockChainHeight"`
	Error            *string  `json:"error"`
	Height           *float64 `json:"height"`
	Status           *string  `json:"status"`
	SyncPercentage   *float64 `json:"syncPercentage"`
	Type             *string  `json:"type"`
}
