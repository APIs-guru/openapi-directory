package shared

// AllocateIdsRequest
// The request for Datastore.AllocateIds.
type AllocateIdsRequest struct {
	DatabaseID *string `json:"databaseId,omitempty"`
	Keys       []Key   `json:"keys,omitempty"`
}
