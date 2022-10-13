package shared

type SettlementreportsListResponse struct {
	Kind          *string            `json:"kind"`
	NextPageToken *string            `json:"nextPageToken"`
	Resources     []SettlementReport `json:"resources"`
}
