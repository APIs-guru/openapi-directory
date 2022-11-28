package shared

// MutationResult
// The result of applying a mutation.
type MutationResult struct {
	ConflictDetected *bool   `json:"conflictDetected,omitempty"`
	Key              *Key    `json:"key,omitempty"`
	UpdateTime       *string `json:"updateTime,omitempty"`
	Version          *string `json:"version,omitempty"`
}
