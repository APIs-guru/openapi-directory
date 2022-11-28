package shared

// Count
// Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference.
type Count struct {
	UpTo *string `json:"upTo,omitempty"`
}
