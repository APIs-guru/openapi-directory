package shared

type LookupRequest struct {
	DatabaseID  *string      `json:"databaseId"`
	Keys        []Key        `json:"keys"`
	ReadOptions *ReadOptions `json:"readOptions"`
}
