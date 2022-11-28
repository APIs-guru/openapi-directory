package shared

// SeekRequest
// Request for the `Seek` method.
type SeekRequest struct {
	Snapshot *string `json:"snapshot,omitempty"`
	Time     *string `json:"time,omitempty"`
}
