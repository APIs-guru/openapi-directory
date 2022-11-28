package shared

// SetInstanceLabelsRequest
// Request for setting instance labels.
type SetInstanceLabelsRequest struct {
	Labels map[string]string `json:"labels,omitempty"`
}
