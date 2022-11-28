package shared

// Key
// A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
type Key struct {
	PartitionID *PartitionID  `json:"partitionId,omitempty"`
	Path        []PathElement `json:"path,omitempty"`
}
