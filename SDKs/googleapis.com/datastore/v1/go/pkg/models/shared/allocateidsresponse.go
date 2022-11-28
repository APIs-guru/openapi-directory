package shared

// AllocateIdsResponse
// The response for Datastore.AllocateIds.
type AllocateIdsResponse struct {
	Keys []Key `json:"keys,omitempty"`
}
