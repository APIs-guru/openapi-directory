package shared

// BatchGetAssetsHistoryResponse
// Batch get assets history response.
type BatchGetAssetsHistoryResponse struct {
	Assets []TemporalAsset `json:"assets,omitempty"`
}
