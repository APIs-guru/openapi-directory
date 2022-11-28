package shared

// ExistenceFilter
// A digest of all the documents that match a given target.
type ExistenceFilter struct {
	Count    *int32 `json:"count,omitempty"`
	TargetID *int32 `json:"targetId,omitempty"`
}
