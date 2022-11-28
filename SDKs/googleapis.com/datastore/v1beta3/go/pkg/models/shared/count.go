package shared

// Count
// Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference.
type Count struct {
	UpTo *string `json:"upTo,omitempty"`
}
