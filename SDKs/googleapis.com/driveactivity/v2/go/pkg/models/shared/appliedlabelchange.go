package shared

// AppliedLabelChange
// Label changes that were made on the Target.
type AppliedLabelChange struct {
	Changes []AppliedLabelChangeDetail `json:"changes,omitempty"`
}
