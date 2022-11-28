package shared

// MetadataItem
// A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.
type MetadataItem struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
