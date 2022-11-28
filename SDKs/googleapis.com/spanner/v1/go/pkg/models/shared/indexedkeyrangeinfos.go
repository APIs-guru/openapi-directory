package shared

// IndexedKeyRangeInfos
// A message representing a (sparse) collection of KeyRangeInfos for specific key buckets.
type IndexedKeyRangeInfos struct {
	KeyRangeInfos map[string]KeyRangeInfos `json:"keyRangeInfos,omitempty"`
}
