package shared

// LookupRequest
// The request for Datastore.Lookup.
type LookupRequest struct {
	DatabaseID  *string      `json:"databaseId,omitempty"`
	Keys        []Key        `json:"keys,omitempty"`
	ReadOptions *ReadOptions `json:"readOptions,omitempty"`
}
