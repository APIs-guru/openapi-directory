package shared

type BatchGetAssetsHistoryResponse struct {
	Assets []TemporalAsset `json:"assets"`
}
