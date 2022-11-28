package shared

// AllocateIdsRequest
// The request for Datastore.AllocateIds.
type AllocateIdsRequest struct {
	Keys []Key `json:"keys,omitempty"`
}
