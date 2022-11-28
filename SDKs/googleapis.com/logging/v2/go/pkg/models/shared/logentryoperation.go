package shared

// LogEntryOperation
// Additional information about a potentially long-running operation with which a log entry is associated.
type LogEntryOperation struct {
	First    *bool   `json:"first,omitempty"`
	ID       *string `json:"id,omitempty"`
	Last     *bool   `json:"last,omitempty"`
	Producer *string `json:"producer,omitempty"`
}
