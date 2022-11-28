package shared

// ReserveIdsRequest
// The request for Datastore.ReserveIds.
type ReserveIdsRequest struct {
	DatabaseID *string `json:"databaseId,omitempty"`
	Keys       []Key   `json:"keys,omitempty"`
}
