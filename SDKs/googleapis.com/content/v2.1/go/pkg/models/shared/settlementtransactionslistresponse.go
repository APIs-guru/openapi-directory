package shared

type SettlementtransactionsListResponse struct {
	Kind          *string                 `json:"kind"`
	NextPageToken *string                 `json:"nextPageToken"`
	Resources     []SettlementTransaction `json:"resources"`
}
