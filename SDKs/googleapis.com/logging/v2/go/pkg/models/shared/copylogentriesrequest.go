package shared

// CopyLogEntriesRequest
// The parameters to CopyLogEntries.
type CopyLogEntriesRequest struct {
	Destination *string `json:"destination,omitempty"`
	Filter      *string `json:"filter,omitempty"`
	Name        *string `json:"name,omitempty"`
}
