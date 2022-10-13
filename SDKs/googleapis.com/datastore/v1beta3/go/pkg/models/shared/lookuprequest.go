package shared

type LookupRequest struct {
	Keys        []Key        `json:"keys"`
	ReadOptions *ReadOptions `json:"readOptions"`
}
