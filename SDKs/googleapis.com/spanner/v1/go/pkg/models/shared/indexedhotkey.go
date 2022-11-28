package shared

// IndexedHotKey
// A message representing a (sparse) collection of hot keys for specific key buckets.
type IndexedHotKey struct {
	SparseHotKeys map[string]int32 `json:"sparseHotKeys,omitempty"`
}
