package shared

type MutationResult struct {
	ConflictDetected *bool   `json:"conflictDetected"`
	Key              *Key    `json:"key"`
	UpdateTime       *string `json:"updateTime"`
	Version          *string `json:"version"`
}
